import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, getDefaultSrc, getSrcSet, HERO_PROFILE_IMAGE, NAVBAR_ITEMS, PROJECTS, SKILLS, TESTIMONIALS, WHATSAPP_URL } from './shared/utils';
import { VisitService } from './visit.service';
import { environment } from '../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Abisur Díaz | Desarrollador Full Stack';
  navItems = NAVBAR_ITEMS;
  show = false;
  projects = PROJECTS;
  displayedProjects = PROJECTS.slice(0, 3);
  skills = SKILLS;
  testimonials = TESTIMONIALS;
  testimonialIndex = 0;
  heroProfileImage = HERO_PROFILE_IMAGE;
  heroProfileSrcSet = getSrcSet(HERO_PROFILE_IMAGE);
  heroProfileDefault = getDefaultSrc(HERO_PROFILE_IMAGE);
  heroProfileSizes = '(max-width: 768px) 100vw, (max-width: 992px) 50vw, 400px';
  projectSizes = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw';
  currentYear = new Date().getFullYear();
  whatsappUrl = WHATSAPP_URL;
  contactForm = {
    name: '',
    email: '',
    message: '',
    projectType: '',
    budget: '',
  };
  contactStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  contactErrorMessage = '';

  getSrcSet = getSrcSet;
  getDefaultSrc = getDefaultSrc;

  get currentTestimonial() {
    return this.testimonials[this.testimonialIndex];
  }

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private iconService: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private visitService: VisitService
  ) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.translateService.use(DEFAULT_LANGUAGE);
    this.iconService.addSvgIcon(
      'ic-menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg')
    );
  }

  ngOnInit(): void {
    this.visitService.registerVisit();
  }

  toggleNav(): void {
    this.show = !this.show;
  }

  cerrarNav(): void {
    this.show = false;
  }

  openWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank', 'noopener');
  }

  submitContactForm(): void {
    if (this.contactStatus === 'sending') return;

    const name = this.contactForm.name.trim();
    const email = this.contactForm.email.trim();
    const message = this.contactForm.message.trim();
    const projectType = this.contactForm.projectType.trim();
    const budget = this.contactForm.budget.trim();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!name || !isEmailValid || !message) {
      this.contactStatus = 'error';
      this.contactErrorMessage = 'Completa nombre, correo válido y mensaje.';
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: this.contactErrorMessage,
        confirmButtonText: 'Entendido',
      });
      return;
    }

    if (!environment.sender || !environment.senderDomain) {
      this.contactStatus = 'error';
      this.contactErrorMessage = 'Falta configurar sender/senderDomain en environment.';
      Swal.fire({
        icon: 'error',
        title: 'Configuracion pendiente',
        text: this.contactErrorMessage,
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    this.contactStatus = 'sending';
    this.contactErrorMessage = '';

    const toEmail = environment.contactEmail || `hola@${environment.senderDomain}`;
    const payload = {
      from: `Portfolio Abisur <contacto@${environment.senderDomain}>`,
      to: [toEmail],
      subject: `Nuevo lead desde abisur.tech - ${name}`,
      reply_to: email,
      html: `
        <h2>Nuevo contacto desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de proyecto:</strong> ${projectType || 'No especificado'}</p>
        <p><strong>Presupuesto:</strong> ${budget || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `Nuevo contacto desde el portfolio\n\nNombre: ${name}\nEmail: ${email}\nTipo de proyecto: ${projectType || 'No especificado'}\nPresupuesto: ${budget || 'No especificado'}\n\nMensaje:\n${message}`,
    };

    this.http.post('/api/emails', payload, {
      headers: { Authorization: `Bearer ${environment.sender}` },
    }).subscribe({
      next: () => {
        this.contactStatus = 'success';
        this.contactForm = { name: '', email: '', message: '', projectType: '', budget: '' };
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Gracias por contactarme. Te respondere en menos de 24 horas.',
          confirmButtonText: 'Excelente',
          timer: 4500,
          timerProgressBar: true,
        });
      },
      error: () => {
        this.contactStatus = 'error';
        this.contactErrorMessage = 'No se pudo enviar el correo. Intenta de nuevo.';
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar',
          text: this.contactErrorMessage,
          confirmButtonText: 'Reintentar',
        });
      },
    });
  }

  getSectionId(navKey: string): string {
    return navKey.split('.')[1] || 'nav-home';
  }

  nextTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    if (index < 0 || index >= this.testimonials.length) return;
    this.testimonialIndex = index;
  }
}
