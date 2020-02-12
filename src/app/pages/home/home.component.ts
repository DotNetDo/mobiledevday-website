import { Component, OnInit, AfterViewInit } from '@angular/core';
import { speakers, scheduleTrack1, scheduleTrack2, sponsors, organizers, help } from 'src/app/shared/data';
import { trigger, style, animate, transition } from '@angular/animations';

declare var $: any;
declare var AOS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0 }),
            animate('.3s ease-out', 
                    style({ height: 300 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300}),
            animate('.3s ease-in', 
                    style({ height: 0}))
          ]
        )
      ]
    )
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {

  speakers: any[] = [];
  speaker: any = {};
  scheduleTrack1: any[] = [];
  sponsors: any[] = [];
  scheduleTrack2: any[] = [];
  organizers: any[] = [];
  help: any[] = [];
  constructor() {
    this.scheduleTrack1 = scheduleTrack1;
    this.scheduleTrack2 = scheduleTrack2;
    this.sponsors = sponsors;
    this.speakers = speakers;
    this.organizers = organizers;
    this.help = help;
  }

  ngOnInit(): void {

  }
  toggleSpeakerDetail(speaker) {
    console.log(speaker);
    this.speaker = speaker;
  }
  ngAfterViewInit(): void {
    $("#days").html(0 + "<span>Days</span>");
    $("#hours").html(0 + "<span>Hours</span>");
    $("#minutes").html(0 + "<span>Minutes</span>");
    $("#seconds").html(0 + "<span>Seconds</span>");
    $('.carousel-speakers').owlCarousel({
      autoplay: false,
      touchDrag: true,
      center: false,
      loop: false,
      items: 1,
      margin: 10,
      stagePadding: 0,
      nav: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    	// scroll
	var scrollWindow = () => {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



    var fullHeight = function () {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });

    };
    fullHeight();

    $('nav .dropdown').hover(function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    }, function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    });

    AOS.init({
      duration: 800,
      easing: 'slide'
    });

    var counter = function () {

      $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 2000
            );
          });

        }

      }, { offset: '95%' });

    }
    counter();
    var contentWayPoint = function () {
      var i = 0;
      $('.ftco-animate').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {

            $('body .ftco-animate.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data('animate-effect');
                if (effect === 'fadeIn') {
                  el.addClass('fadeIn ftco-animated');
                } else if (effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft ftco-animated');
                } else if (effect === 'fadeInRight') {
                  el.addClass('fadeInRight ftco-animated');
                } else {
                  el.addClass('fadeInUp ftco-animated');
                }
                el.removeClass('item-animate');
              }, k * 50, 'easeInOutExpo');
            });

          }, 100);

        }

      }, { offset: '95%' });
    };
    contentWayPoint();
    setInterval(() => { this.makeTimer(); }, 1000);
  }
  makeTimer() {

    let endTime: any = new Date(2020, 1, 29, 8);
    endTime = (Date.parse(endTime) / 1000);

    let now: any = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days: any = Math.floor(timeLeft / 86400);
    let hours: any = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes: any = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    let seconds: any = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Días</span>");
    $("#hours").html(hours + "<span>Horas</span>");
    $("#minutes").html(minutes + "<span>Minutos</span>");
    $("#seconds").html(seconds + "<span>Segundos</span>");

  }
}
