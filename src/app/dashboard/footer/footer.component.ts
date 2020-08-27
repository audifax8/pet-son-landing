import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public footerInfo = {
    social: {
      title: 'FOOTER.SOCIAL',
      elements: [
        {
          url: 'https://www.facebook.com/FundacionPetSon/',
          name: 'facebook',
          icon: 'fa-facebook'
        },
        {
          url: 'https://twitter.com/PetSonMedellin',
          name: 'twitter',
          icon: 'fa-twitter'
        },
        {
          url: 'https://www.instagram.com/petsonmde/?hl=es-la',
          name: 'instagram',
          icon: 'fa-instagram'
        }
      ]
    },
    services: {
      title: 'FOOTER.SERVICES.TITLE',
      elements: [
        'FOOTER.SERVICES.RESCUES',
        'FOOTER.SERVICES.ADOPTIONS',
        'FOOTER.SERVICES.SHELTER',
        'FOOTER.SERVICES.GRAVEYARD',
        'FOOTER.SERVICES.ACCESSORIES'
      ]
    },
    sponsors: {
      title: 'NAV.SPONSORS',
      elements: [
        'Escuela de adistramiento canino Arca de Noé',
        'Domicopias'
      ]
    },
    products: {
      title: 'FOOTER.PRODUCTS.TITLE',
      elements: [
        'FOOTER.PRODUCTS.HATS',
        'FOOTER.PRODUCTS.SHIRTS',
        'FOOTER.PRODUCTS.SCARVES',
      ]
    },
    contact: {
      title: 'NAV.CONTACT',
      elements: [
        {
          icon: 'fa-home',
          value: ' Medellín, Colombia'
        },
        {
          icon: 'fa-envelope',
          value: ' petson@gmail.com',
        },
        {
          icon: 'fa-phone',
          value: ' +57 234 567 88',
        }
      ]
    },
    copyRight: 'FOOTER.COPY_RIGTH'
  };

}
