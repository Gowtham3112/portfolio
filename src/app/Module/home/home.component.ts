import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
} from 'ng-apexcharts';
import { ScrollService } from 'src/app/scroll.service';

export type RadialChart = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showContent: boolean = true;
  skills: any[] = [];

  public cre_chart_per: Partial<RadialChart> | any;
  public com_chart_per: Partial<RadialChart> | any;
  public PS_chart_per: Partial<RadialChart> | any;
  public TW_chart_per: Partial<RadialChart> | any;
  
  @ViewChild('homeSection') homeSection!: ElementRef
  @ViewChild('serviceSection') serviceSection!: ElementRef
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef
  @ViewChild('contactSection') contactSection!: ElementRef

  constructor(private scroll:ScrollService){

  }

  formUser !: FormGroup;

  ngOnInit() {

    this.formUser = new FormGroup({
      mail: new FormControl(''),
      subject: new FormControl(''),

    })

    this.getCre();
    this.getCom();
    this.getPS();
    this.getTW();

    this.startAutoScroll();


    this.skills = [
      { name: 'HTML', icon: '🌐', percentage: 90 },
      { name: 'CSS', icon: '🎨', percentage: 90 },
      { name: 'JavaScript', icon: '📜', percentage: 85 },
      { name: 'Java', icon: '☕', percentage: 70 },
      { name: 'jQuery', icon: '🔧', percentage: 70 },
    ];
  }

  getCre() {
    this.cre_chart_per = {
      series: [90],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            value: {
              color: '#00e0ff',
            },
          },
        },
      },
      colors: ['#00e0ff'],
      labels: [''],
    };
  }

  getCom() {
    this.com_chart_per = {
      series: [90],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            value: {
              color: '#00e0ff',
            },
          },
        },
      },
      colors: ['#00e0ff'],
      labels: [''],
    };
  }

  getPS() {
    this.PS_chart_per = {
      series: [90],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            value: {
              color: '#00e0ff',
            },
          },
        },
      },
      colors: ['#00e0ff'],
      labels: [''],
    };
  }

  getTW() {
    this.TW_chart_per = {
      series: [90],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          },
          dataLabels: {
            value: {
              color: '#00e0ff',
            },
          },
        },
      },
      colors: ['#00e0ff'],
      labels: [''],
    };
  }

  ////////////////////

  contents = [
    {
      title: 'UI/UX',
      description:
        "Great UI/UX design should prioritize clarity, simplicity, and user flow. It involves intuitive navigation, accessible elements, and visual hierarchy. Effective UI/UX makes the user's interaction smooth and enjoyable.",
      image: 'assets/Images/UIUX.jpg',
      buttonText: 'READ MORE',
    },
    {
      title: 'Web App Development',
      description:
        'Web application development involves creating interactive software applications that run on a web browser. It typically includes front-end (UI/UX) and back-end (server-side logic, databases) development. Tools like HTML, CSS, JavaScript, and frameworks like Angular or React are commonly used to build these applications.',
      image: 'assets/Images/web.jpg',
      buttonText: 'LEARN MORE',
    },
    {
      title: 'Mobile App Development',
      description:
        'Mobile application development involves creating software applications for mobile devices like smartphones and tablets. It includes designing, coding, testing, and deploying apps on platforms such as Android and iOS. Key aspects include user experience, functionality, and performance optimization.',
      image: 'assets/Images/mobile.jpg',
      buttonText: 'EXPLORE',
    },
  ];

  currentIndex = 0;
  autoScrollInterval: any;

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  changeContent(index: number) {
    this.currentIndex = index;
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextContent();
    }, 8000); 
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  nextContent() {
    this.currentIndex = (this.currentIndex + 1) % this.contents.length;
  }

  getTransformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  //////////////////////////

  text: string = "Software Engineer";
  speed: number = 100; 
  delay: number = 1500; 
  targetElement: HTMLElement | null = null;

  ngAfterViewInit() {
    this.targetElement = document.getElementById("typewriter");
    if (this.targetElement) {
      this.typeWriterEffect();
    }

    this.scroll.scrollEvent$.subscribe((section) => {
      if (section === 'skills' && this.skillsSection) {
        this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'projects' && this.projectsSection) {
        this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }else if (section === 'home' && this.homeSection) {
        this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }else if (section === 'service' && this.serviceSection) {
        this.serviceSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }else if (section === 'contact' && this.contactSection) {
        this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });

  }

  typeWriterEffect() {
    let index = 0;

    const type = () => {
      if (index < this.text.length) {
        this.targetElement!.innerHTML += this.text[index];
        index++;
        setTimeout(type, this.speed); 
      } else {
        setTimeout(() => {
          this.clearTextAndRestart();
        }, this.delay);
      }
    };

    type();
  }

  clearTextAndRestart() {
    this.targetElement!.innerHTML = ''; 
    this.typeWriterEffect();
  }
  

  //////////////


  
}
