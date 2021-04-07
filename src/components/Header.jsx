import React from 'react';
import { Link } from 'react-router-dom'
import arrowR from '../images/svg/arrow-r.svg';
import logo from '../images/svg/Logo.svg';
import surf from '../images/svg/nav-surf.svg';
import camp from '../images/svg/nav-camp.svg';
import travel from '../images/svg/nav-travel.svg';
import shop from '../images/svg/nav-surfboard.svg';
import search from '../images/svg/search.svg';


export const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className='header__title'>
                    go
                    surf
                </div>
                
                <div className='header__map'>
                    <svg width="1001" height="496" viewBox="0 0 1001 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.29827">
                    <path d="M1008.08 163.448L443.182 -356.858V-747.19L28.1096 -770C24.9043 -762.456 4.36709 -740.714 7.57176 -728.596C11.43 -714.102 30.8387 -718.735 36.4776 -709.409C43.0661 -698.42 31.7291 -653.749 28.3457 -640.86C21.8759 -616.445 7.09676 -596.665 2.82235 -572.25C-4.35982 -531.263 10.1824 -534.53 37.7242 -508.927C84.141 -465.742 46.9244 -420.952 58.6176 -370.223C68.1146 -328.878 109.605 -307.554 124.8 -266.211C136.553 -234.37 152.697 -226.233 177.746 -202.947C177.153 -217.084 164.51 -258.785 188.253 -255.102C211.817 -251.478 202.736 -216.669 207.247 -202.115C211.045 -189.997 237.933 -165.761 215.616 -154.593C208.196 -150.91 187.066 -165.582 178.577 -169.503C184.572 -150.791 180.774 -131.367 190.271 -113.487C201.608 -92.162 213.835 -100.359 228.853 -88.7754C244.344 -76.8355 242.683 -63.1137 235.797 -45.0554C228.615 -26.2247 221.196 -29.1352 232.592 -6.44342C240.843 9.95119 254.85 30.7421 266.9 43.2164C273.904 50.4634 281.502 52.1267 288.506 61.3932C294.323 69.1155 292.067 79.2142 299.012 86.1638C310.883 98.1037 331.006 98.282 340.384 113.904C350.831 131.309 338.96 144.437 369.706 142.833C371.309 177.643 377.897 209.185 377.541 243.994C394.695 250.825 422.414 242.687 440.399 239.063C458.266 263.18 481.355 246.429 501.774 259.558C510.678 265.26 508.837 279.517 514.239 284.506C525.339 294.723 533.529 288.308 547.301 291.872C557.51 294.486 565.404 301.97 575.138 304.703C584.338 307.257 599.475 301.258 606.301 309.396C614.492 319.138 600.78 336.958 613.127 344.799C623.395 351.333 638.115 335.77 648.088 338.027C659.721 340.7 693.079 371.174 701.271 381.212C710.59 392.677 719.969 414.062 725.25 428.793C733.501 451.841 732.373 463.127 749.408 479.998C760.27 490.75 749.942 491.522 767.63 494.67C779.204 496.749 794.518 488.374 806.212 487.067C830.549 484.394 855.122 489.027 879.102 484.453C901.421 480.176 922.729 473.166 945.64 469.899C965.465 467.048 1000.37 469.246 1017.94 459.801C1036.99 449.643 1038.71 426.654 1011.17 430.932C1008.97 416.26 1018.77 396.003 1007.85 385.847C1023.04 365.056 1028.56 350.384 1030.93 324.959C1032 313.792 1032.48 301.436 1038 292.05C1043.4 282.783 1058.59 277.259 1061.56 269.299C1066.13 256.943 1058.83 251.419 1053.25 244.528C1049.69 240.073 1039.54 242.212 1036.63 238.291C1031.23 231.103 1036.57 223.678 1033.6 216.431C1024.94 195.462 1014.61 187.205 1008.08 163.444C1008.26 167.424 1008.44 171.463 1008.2 175.384" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <path d="M729.114 83.9394C720.546 107.321 740.614 115.526 756.675 130.807C761.434 135.336 761.888 142.817 756.879 147.342C746.107 157.074 705.264 142.917 707.854 155.745C710.53 168.994 745.061 187.531 746.618 188.799C760.284 199.932 764.735 228.174 757.208 243.658C751.852 254.676 716.342 250.962 705.172 247.293C632.024 223.266 664.985 226.131 582.817 218.67C576.527 218.099 569.935 217.806 563.894 219.65C557.671 221.549 557.869 229.339 559.957 233.55C566.876 247.506 597.849 271.178 589.514 289.523C586.956 295.152 580.963 298.707 578.264 304.27C576.151 308.627 576.385 313.772 575.445 318.523" stroke="white" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M573.5 326C577.09 326 580 323.09 580 319.5C580 315.91 577.09 313 573.5 313C569.91 313 567 315.91 567 319.5C567 323.09 569.91 326 573.5 326Z" fill="#4AF6CD"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M661 363C662.657 363 664 361.657 664 360C664 358.343 662.657 357 661 357C659.343 357 658 358.343 658 360C658 361.657 659.343 363 661 363Z" fill="#4AF6CD"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M725 471C726.657 471 728 469.657 728 468C728 466.343 726.657 465 725 465C723.343 465 722 466.343 722 468C722 469.657 723.343 471 725 471Z" fill="#4AF6CD"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M365 228C366.657 228 368 226.657 368 225C368 223.343 366.657 222 365 222C363.343 222 362 223.343 362 225C362 226.657 363.343 228 365 228Z" fill="#4AF6CD"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M729.5 91C733.09 91 736 88.0899 736 84.5C736 80.9101 733.09 78 729.5 78C725.91 78 723 80.9101 723 84.5C723 88.0899 725.91 91 729.5 91Z" fill="#4AF6CD"/>
                    <path d="M398.41 310.976L396.17 322H394.218L392.186 312.768L390.138 322H388.234L385.994 310.976H387.482L389.258 320.672L391.386 310.976H393.002L395.178 320.672L397.018 310.976H398.41ZM406.544 317.536C406.544 317.781 406.534 318.032 406.512 318.288H401.136C401.2 319.216 401.435 319.899 401.84 320.336C402.246 320.773 402.768 320.992 403.408 320.992C403.814 320.992 404.187 320.933 404.528 320.816C404.87 320.699 405.227 320.512 405.6 320.256L406.24 321.136C405.344 321.84 404.363 322.192 403.296 322.192C402.123 322.192 401.206 321.808 400.544 321.04C399.894 320.272 399.568 319.216 399.568 317.872C399.568 316.997 399.707 316.224 399.984 315.552C400.272 314.869 400.678 314.336 401.2 313.952C401.734 313.568 402.358 313.376 403.072 313.376C404.192 313.376 405.051 313.744 405.648 314.48C406.246 315.216 406.544 316.235 406.544 317.536ZM405.088 317.104C405.088 316.272 404.923 315.637 404.592 315.2C404.262 314.763 403.766 314.544 403.104 314.544C401.899 314.544 401.243 315.429 401.136 317.2H405.088V317.104ZM411.183 313.376C411.759 313.376 412.276 313.456 412.735 313.616C413.194 313.776 413.631 314.016 414.047 314.336L413.423 315.264C413.039 315.019 412.671 314.837 412.319 314.72C411.978 314.603 411.615 314.544 411.231 314.544C410.751 314.544 410.372 314.645 410.095 314.848C409.818 315.04 409.679 315.307 409.679 315.648C409.679 315.989 409.807 316.256 410.063 316.448C410.33 316.64 410.804 316.827 411.487 317.008C412.426 317.243 413.124 317.563 413.583 317.968C414.052 318.373 414.287 318.928 414.287 319.632C414.287 320.464 413.962 321.099 413.311 321.536C412.671 321.973 411.887 322.192 410.959 322.192C409.679 322.192 408.618 321.824 407.775 321.088L408.559 320.192C409.274 320.736 410.063 321.008 410.927 321.008C411.482 321.008 411.919 320.896 412.239 320.672C412.57 320.437 412.735 320.123 412.735 319.728C412.735 319.44 412.676 319.211 412.559 319.04C412.442 318.859 412.239 318.704 411.951 318.576C411.663 318.437 411.242 318.293 410.687 318.144C409.791 317.909 409.14 317.595 408.735 317.2C408.34 316.805 408.143 316.304 408.143 315.696C408.143 315.259 408.271 314.864 408.527 314.512C408.794 314.149 409.156 313.872 409.615 313.68C410.084 313.477 410.607 313.376 411.183 313.376ZM420.62 321.616C420.065 322 419.436 322.192 418.732 322.192C418.017 322.192 417.457 321.989 417.052 321.584C416.657 321.168 416.46 320.571 416.46 319.792V314.704H414.988V313.568H416.46V311.664L417.932 311.488V313.568H419.932L419.772 314.704H417.932V319.728C417.932 320.165 418.006 320.485 418.156 320.688C418.316 320.88 418.577 320.976 418.94 320.976C419.27 320.976 419.644 320.864 420.06 320.64L420.62 321.616ZM429.179 310.784C429.915 310.784 430.545 310.891 431.067 311.104C431.59 311.307 432.097 311.627 432.587 312.064L431.755 312.992C431.339 312.661 430.929 312.421 430.523 312.272C430.129 312.112 429.702 312.032 429.243 312.032C428.667 312.032 428.193 312.165 427.819 312.432C427.446 312.699 427.259 313.088 427.259 313.6C427.259 313.92 427.323 314.192 427.451 314.416C427.579 314.629 427.814 314.827 428.155 315.008C428.507 315.189 429.014 315.381 429.675 315.584C430.369 315.797 430.945 316.027 431.403 316.272C431.862 316.517 432.23 316.859 432.507 317.296C432.795 317.723 432.939 318.267 432.939 318.928C432.939 319.568 432.779 320.133 432.459 320.624C432.15 321.115 431.697 321.499 431.099 321.776C430.513 322.053 429.814 322.192 429.003 322.192C427.478 322.192 426.23 321.717 425.259 320.768L426.091 319.84C426.539 320.203 426.993 320.48 427.451 320.672C427.91 320.853 428.422 320.944 428.987 320.944C429.67 320.944 430.235 320.779 430.683 320.448C431.131 320.107 431.355 319.616 431.355 318.976C431.355 318.613 431.286 318.315 431.147 318.08C431.009 317.835 430.769 317.616 430.427 317.424C430.097 317.232 429.611 317.04 428.971 316.848C427.841 316.507 427.014 316.096 426.491 315.616C425.969 315.136 425.707 314.485 425.707 313.664C425.707 313.109 425.851 312.613 426.139 312.176C426.438 311.739 426.849 311.397 427.371 311.152C427.905 310.907 428.507 310.784 429.179 310.784ZM439.066 313.376C439.834 313.376 440.431 313.605 440.858 314.064C441.295 314.523 441.514 315.152 441.514 315.952V322H440.042V316.16C440.042 315.563 439.925 315.141 439.69 314.896C439.466 314.651 439.135 314.528 438.698 314.528C438.261 314.528 437.871 314.656 437.53 314.912C437.189 315.168 436.869 315.531 436.57 316V322H435.098V310.192L436.57 310.032V314.736C437.231 313.829 438.063 313.376 439.066 313.376ZM447.641 313.376C448.825 313.376 449.742 313.771 450.393 314.56C451.054 315.349 451.385 316.421 451.385 317.776C451.385 318.651 451.236 319.424 450.937 320.096C450.638 320.757 450.206 321.275 449.641 321.648C449.076 322.011 448.404 322.192 447.625 322.192C446.441 322.192 445.518 321.797 444.857 321.008C444.196 320.219 443.865 319.147 443.865 317.792C443.865 316.917 444.014 316.149 444.313 315.488C444.612 314.816 445.044 314.299 445.609 313.936C446.174 313.563 446.852 313.376 447.641 313.376ZM447.641 314.56C446.18 314.56 445.449 315.637 445.449 317.792C445.449 319.936 446.174 321.008 447.625 321.008C449.076 321.008 449.801 319.931 449.801 317.776C449.801 315.632 449.081 314.56 447.641 314.56ZM457.481 313.376C457.78 313.376 458.057 313.408 458.313 313.472L458.041 314.912C457.785 314.848 457.54 314.816 457.305 314.816C456.782 314.816 456.361 315.008 456.041 315.392C455.721 315.776 455.47 316.373 455.289 317.184V322H453.817V313.568H455.081L455.225 315.28C455.449 314.651 455.753 314.176 456.137 313.856C456.521 313.536 456.969 313.376 457.481 313.376ZM465.872 317.536C465.872 317.781 465.862 318.032 465.84 318.288H460.464C460.528 319.216 460.763 319.899 461.168 320.336C461.574 320.773 462.096 320.992 462.736 320.992C463.142 320.992 463.515 320.933 463.856 320.816C464.198 320.699 464.555 320.512 464.928 320.256L465.568 321.136C464.672 321.84 463.691 322.192 462.624 322.192C461.451 322.192 460.534 321.808 459.872 321.04C459.222 320.272 458.896 319.216 458.896 317.872C458.896 316.997 459.035 316.224 459.312 315.552C459.6 314.869 460.006 314.336 460.528 313.952C461.062 313.568 461.686 313.376 462.4 313.376C463.52 313.376 464.379 313.744 464.976 314.48C465.574 315.216 465.872 316.235 465.872 317.536ZM464.416 317.104C464.416 316.272 464.251 315.637 463.92 315.2C463.59 314.763 463.094 314.544 462.432 314.544C461.227 314.544 460.571 315.429 460.464 317.2H464.416V317.104ZM474.41 309.184V323.568H474.058V309.184H474.41ZM493.237 322H491.765L491.381 317.024C491.221 315.072 491.131 313.573 491.109 312.528L488.725 320.752H487.301L484.789 312.512C484.789 313.845 484.72 315.387 484.581 317.136L484.213 322H482.773L483.685 310.976H485.733L488.053 318.992L490.261 310.976H492.325L493.237 322ZM501.434 320.032C501.434 320.373 501.493 320.629 501.61 320.8C501.728 320.96 501.904 321.083 502.138 321.168L501.802 322.192C501.365 322.139 501.013 322.016 500.746 321.824C500.48 321.632 500.282 321.333 500.154 320.928C499.589 321.771 498.752 322.192 497.642 322.192C496.81 322.192 496.154 321.957 495.674 321.488C495.194 321.019 494.954 320.405 494.954 319.648C494.954 318.752 495.274 318.064 495.914 317.584C496.565 317.104 497.482 316.864 498.666 316.864H499.962V316.24C499.962 315.643 499.818 315.216 499.53 314.96C499.242 314.704 498.8 314.576 498.202 314.576C497.584 314.576 496.826 314.725 495.93 315.024L495.562 313.952C496.608 313.568 497.578 313.376 498.474 313.376C499.466 313.376 500.208 313.621 500.698 314.112C501.189 314.592 501.434 315.28 501.434 316.176V320.032ZM497.978 321.088C498.821 321.088 499.482 320.651 499.962 319.776V317.84H498.858C497.301 317.84 496.522 318.416 496.522 319.568C496.522 320.069 496.645 320.448 496.89 320.704C497.136 320.96 497.498 321.088 497.978 321.088ZM505.981 322.192C505.437 322.192 505.005 322.032 504.685 321.712C504.376 321.381 504.221 320.923 504.221 320.336V310.176L505.693 310V320.304C505.693 320.539 505.731 320.709 505.805 320.816C505.891 320.923 506.029 320.976 506.221 320.976C506.424 320.976 506.605 320.944 506.765 320.88L507.149 321.904C506.797 322.096 506.408 322.192 505.981 322.192ZM510.461 313.568V322H508.989V313.568H510.461ZM509.709 309.52C510.018 309.52 510.269 309.616 510.461 309.808C510.653 310 510.749 310.24 510.749 310.528C510.749 310.816 510.653 311.056 510.461 311.248C510.269 311.429 510.018 311.52 509.709 311.52C509.41 311.52 509.165 311.429 508.973 311.248C508.781 311.056 508.685 310.816 508.685 310.528C508.685 310.24 508.781 310 508.973 309.808C509.165 309.616 509.41 309.52 509.709 309.52ZM517.36 313.376C518.32 313.376 519.083 313.765 519.648 314.544C520.214 315.312 520.496 316.389 520.496 317.776C520.496 318.651 520.363 319.424 520.096 320.096C519.83 320.757 519.446 321.275 518.944 321.648C518.443 322.011 517.856 322.192 517.184 322.192C516.299 322.192 515.552 321.819 514.944 321.072L514.8 322H513.504V310.176L514.976 310V314.624C515.584 313.792 516.379 313.376 517.36 313.376ZM516.832 321.024C517.483 321.024 517.99 320.763 518.352 320.24C518.726 319.707 518.912 318.885 518.912 317.776C518.912 316.635 518.742 315.813 518.4 315.312C518.059 314.8 517.574 314.544 516.944 314.544C516.198 314.544 515.542 314.981 514.976 315.856V319.888C515.2 320.24 515.472 320.517 515.792 320.72C516.123 320.923 516.47 321.024 516.832 321.024ZM529.276 322H528.012L527.9 320.688C527.58 321.211 527.212 321.595 526.796 321.84C526.38 322.075 525.874 322.192 525.276 322.192C524.54 322.192 523.964 321.968 523.548 321.52C523.132 321.072 522.924 320.437 522.924 319.616V313.568H524.396V319.456C524.396 320.032 524.498 320.443 524.7 320.688C524.903 320.923 525.234 321.04 525.692 321.04C526.514 321.04 527.218 320.555 527.804 319.584V313.568H529.276V322ZM532.701 319.968C533.021 319.968 533.288 320.075 533.501 320.288C533.714 320.501 533.821 320.763 533.821 321.072C533.821 321.403 533.725 321.781 533.533 322.208L532.461 324.656H531.405L532.045 322C531.906 321.893 531.794 321.76 531.709 321.6C531.634 321.44 531.597 321.264 531.597 321.072C531.597 320.763 531.704 320.501 531.917 320.288C532.13 320.075 532.392 319.968 532.701 319.968ZM544.331 310.784C544.992 310.784 545.547 310.869 545.995 311.04C546.454 311.211 546.918 311.488 547.387 311.872L546.555 312.848C545.883 312.304 545.174 312.032 544.427 312.032C543.51 312.032 542.768 312.384 542.203 313.088C541.648 313.792 541.371 314.923 541.371 316.48C541.371 317.995 541.648 319.115 542.203 319.84C542.758 320.555 543.494 320.912 544.411 320.912C544.88 320.912 545.291 320.832 545.643 320.672C545.995 320.512 546.368 320.288 546.763 320L547.515 320.96C547.174 321.312 546.736 321.605 546.203 321.84C545.67 322.075 545.056 322.192 544.363 322.192C543.467 322.192 542.667 321.973 541.963 321.536C541.27 321.088 540.726 320.437 540.331 319.584C539.947 318.72 539.755 317.685 539.755 316.48C539.755 315.275 539.958 314.245 540.363 313.392C540.768 312.528 541.318 311.877 542.011 311.44C542.704 311.003 543.478 310.784 544.331 310.784ZM555.3 322L554.468 319.232H550.292L549.46 322H547.924L551.46 310.976H553.38L556.9 322H555.3ZM550.66 318H554.1L552.388 312.24L550.66 318Z" fill="white"/>
                    <path d="M598.378 75.784C599.039 75.784 599.594 75.8693 600.042 76.04C600.501 76.2107 600.965 76.488 601.434 76.872L600.602 77.848C599.93 77.304 599.221 77.032 598.474 77.032C597.557 77.032 596.815 77.384 596.25 78.088C595.695 78.792 595.418 79.9227 595.418 81.48C595.418 82.9947 595.695 84.1147 596.25 84.84C596.805 85.5547 597.541 85.912 598.458 85.912C598.927 85.912 599.338 85.832 599.69 85.672C600.042 85.512 600.415 85.288 600.81 85L601.562 85.96C601.221 86.312 600.783 86.6053 600.25 86.84C599.717 87.0747 599.103 87.192 598.41 87.192C597.514 87.192 596.714 86.9733 596.01 86.536C595.317 86.088 594.773 85.4373 594.378 84.584C593.994 83.72 593.802 82.6853 593.802 81.48C593.802 80.2747 594.005 79.2453 594.41 78.392C594.815 77.528 595.365 76.8773 596.058 76.44C596.751 76.0027 597.525 75.784 598.378 75.784ZM609.401 87H608.137L608.025 85.688C607.705 86.2107 607.337 86.5947 606.921 86.84C606.505 87.0747 605.999 87.192 605.401 87.192C604.665 87.192 604.089 86.968 603.673 86.52C603.257 86.072 603.049 85.4373 603.049 84.616V78.568H604.521V84.456C604.521 85.032 604.623 85.4427 604.825 85.688C605.028 85.9227 605.359 86.04 605.817 86.04C606.639 86.04 607.343 85.5547 607.929 84.584V78.568H609.401V87ZM616.106 78.376C616.405 78.376 616.682 78.408 616.938 78.472L616.666 79.912C616.41 79.848 616.165 79.816 615.93 79.816C615.407 79.816 614.986 80.008 614.666 80.392C614.346 80.776 614.095 81.3733 613.914 82.184V87H612.442V78.568H613.706L613.85 80.28C614.074 79.6507 614.378 79.176 614.762 78.856C615.146 78.536 615.594 78.376 616.106 78.376ZM622.278 78.376C622.576 78.376 622.854 78.408 623.11 78.472L622.838 79.912C622.582 79.848 622.336 79.816 622.102 79.816C621.579 79.816 621.158 80.008 620.838 80.392C620.518 80.776 620.267 81.3733 620.086 82.184V87H618.614V78.568H619.878L620.022 80.28C620.246 79.6507 620.55 79.176 620.934 78.856C621.318 78.536 621.766 78.376 622.278 78.376ZM630.669 82.536C630.669 82.7813 630.659 83.032 630.637 83.288H625.261C625.325 84.216 625.56 84.8987 625.965 85.336C626.371 85.7733 626.893 85.992 627.533 85.992C627.939 85.992 628.312 85.9333 628.653 85.816C628.995 85.6987 629.352 85.512 629.725 85.256L630.365 86.136C629.469 86.84 628.488 87.192 627.421 87.192C626.248 87.192 625.331 86.808 624.669 86.04C624.019 85.272 623.693 84.216 623.693 82.872C623.693 81.9973 623.832 81.224 624.109 80.552C624.397 79.8693 624.803 79.336 625.325 78.952C625.859 78.568 626.483 78.376 627.197 78.376C628.317 78.376 629.176 78.744 629.773 79.48C630.371 80.216 630.669 81.2347 630.669 82.536ZM629.213 82.104C629.213 81.272 629.048 80.6373 628.717 80.2C628.387 79.7627 627.891 79.544 627.229 79.544C626.024 79.544 625.368 80.4293 625.261 82.2H629.213V82.104ZM636.988 78.376C637.756 78.376 638.353 78.6053 638.78 79.064C639.217 79.5227 639.436 80.152 639.436 80.952V87H637.964V81.16C637.964 80.5627 637.852 80.1413 637.628 79.896C637.404 79.6507 637.073 79.528 636.636 79.528C636.188 79.528 635.793 79.656 635.452 79.912C635.111 80.168 634.791 80.536 634.492 81.016V87H633.02V78.568H634.284L634.412 79.816C634.711 79.368 635.079 79.016 635.516 78.76C635.964 78.504 636.455 78.376 636.988 78.376ZM646.651 86.616C646.096 87 645.467 87.192 644.763 87.192C644.048 87.192 643.488 86.9893 643.083 86.584C642.688 86.168 642.491 85.5707 642.491 84.792V79.704H641.019V78.568H642.491V76.664L643.963 76.488V78.568H645.963L645.803 79.704H643.963V84.728C643.963 85.1653 644.038 85.4853 644.187 85.688C644.347 85.88 644.608 85.976 644.971 85.976C645.302 85.976 645.675 85.864 646.091 85.64L646.651 86.616ZM654.011 75.976V85.672H658.539L658.363 87H652.491V75.976H654.011ZM663.141 78.376C664.325 78.376 665.242 78.7707 665.893 79.56C666.554 80.3493 666.885 81.4213 666.885 82.776C666.885 83.6507 666.736 84.424 666.437 85.096C666.138 85.7573 665.706 86.2747 665.141 86.648C664.576 87.0107 663.904 87.192 663.125 87.192C661.941 87.192 661.018 86.7973 660.357 86.008C659.696 85.2187 659.365 84.1467 659.365 82.792C659.365 81.9173 659.514 81.1493 659.813 80.488C660.112 79.816 660.544 79.2987 661.109 78.936C661.674 78.5627 662.352 78.376 663.141 78.376ZM663.141 79.56C661.68 79.56 660.949 80.6373 660.949 82.792C660.949 84.936 661.674 86.008 663.125 86.008C664.576 86.008 665.301 84.9307 665.301 82.776C665.301 80.632 664.581 79.56 663.141 79.56ZM672.389 78.376C672.89 78.376 673.349 78.4507 673.765 78.6C674.181 78.7387 674.581 78.968 674.965 79.288L674.261 80.216C673.962 80.0027 673.669 79.848 673.381 79.752C673.104 79.6453 672.794 79.592 672.453 79.592C671.77 79.592 671.237 79.864 670.853 80.408C670.48 80.952 670.293 81.7573 670.293 82.824C670.293 83.8907 670.48 84.68 670.853 85.192C671.226 85.6933 671.76 85.944 672.453 85.944C672.784 85.944 673.088 85.896 673.365 85.8C673.642 85.6933 673.952 85.528 674.293 85.304L674.965 86.264C674.197 86.8827 673.338 87.192 672.389 87.192C671.248 87.192 670.346 86.808 669.685 86.04C669.034 85.272 668.709 84.2107 668.709 82.856C668.709 81.96 668.858 81.176 669.157 80.504C669.456 79.832 669.877 79.3093 670.421 78.936C670.976 78.5627 671.632 78.376 672.389 78.376ZM682.481 85.032C682.481 85.3733 682.54 85.6293 682.657 85.8C682.775 85.96 682.951 86.0827 683.185 86.168L682.849 87.192C682.412 87.1387 682.06 87.016 681.793 86.824C681.527 86.632 681.329 86.3333 681.201 85.928C680.636 86.7707 679.799 87.192 678.689 87.192C677.857 87.192 677.201 86.9573 676.721 86.488C676.241 86.0187 676.001 85.4053 676.001 84.648C676.001 83.752 676.321 83.064 676.961 82.584C677.612 82.104 678.529 81.864 679.713 81.864H681.009V81.24C681.009 80.6427 680.865 80.216 680.577 79.96C680.289 79.704 679.847 79.576 679.249 79.576C678.631 79.576 677.873 79.7253 676.977 80.024L676.609 78.952C677.655 78.568 678.625 78.376 679.521 78.376C680.513 78.376 681.255 78.6213 681.745 79.112C682.236 79.592 682.481 80.28 682.481 81.176V85.032ZM679.025 86.088C679.868 86.088 680.529 85.6507 681.009 84.776V82.84H679.905C678.348 82.84 677.569 83.416 677.569 84.568C677.569 85.0693 677.692 85.448 677.937 85.704C678.183 85.96 678.545 86.088 679.025 86.088ZM689.76 86.616C689.206 87 688.576 87.192 687.872 87.192C687.158 87.192 686.598 86.9893 686.192 86.584C685.798 86.168 685.6 85.5707 685.6 84.792V79.704H684.128V78.568H685.6V76.664L687.072 76.488V78.568H689.072L688.912 79.704H687.072V84.728C687.072 85.1653 687.147 85.4853 687.296 85.688C687.456 85.88 687.718 85.976 688.08 85.976C688.411 85.976 688.784 85.864 689.2 85.64L689.76 86.616ZM692.758 78.568V87H691.286V78.568H692.758ZM692.006 74.52C692.315 74.52 692.566 74.616 692.758 74.808C692.95 75 693.046 75.24 693.046 75.528C693.046 75.816 692.95 76.056 692.758 76.248C692.566 76.4293 692.315 76.52 692.006 76.52C691.707 76.52 691.462 76.4293 691.27 76.248C691.078 76.056 690.982 75.816 690.982 75.528C690.982 75.24 691.078 75 691.27 74.808C691.462 74.616 691.707 74.52 692.006 74.52ZM698.969 78.376C700.153 78.376 701.071 78.7707 701.721 79.56C702.383 80.3493 702.713 81.4213 702.713 82.776C702.713 83.6507 702.564 84.424 702.265 85.096C701.967 85.7573 701.535 86.2747 700.969 86.648C700.404 87.0107 699.732 87.192 698.953 87.192C697.769 87.192 696.847 86.7973 696.185 86.008C695.524 85.2187 695.193 84.1467 695.193 82.792C695.193 81.9173 695.343 81.1493 695.641 80.488C695.94 79.816 696.372 79.2987 696.937 78.936C697.503 78.5627 698.18 78.376 698.969 78.376ZM698.969 79.56C697.508 79.56 696.777 80.6373 696.777 82.792C696.777 84.936 697.503 86.008 698.953 86.008C700.404 86.008 701.129 84.9307 701.129 82.776C701.129 80.632 700.409 79.56 698.969 79.56ZM709.113 78.376C709.881 78.376 710.478 78.6053 710.905 79.064C711.342 79.5227 711.561 80.152 711.561 80.952V87H710.089V81.16C710.089 80.5627 709.977 80.1413 709.753 79.896C709.529 79.6507 709.198 79.528 708.761 79.528C708.313 79.528 707.918 79.656 707.577 79.912C707.236 80.168 706.916 80.536 706.617 81.016V87H705.145V78.568H706.409L706.537 79.816C706.836 79.368 707.204 79.016 707.641 78.76C708.089 78.504 708.58 78.376 709.113 78.376Z" fill="white"/>
                    </svg>
                </div>
                <div className='header__aside'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='logogo'/>
                        </Link>
                    </div>
                    <nav className='menu'>
                        <ul className='menu__list'>          
                            <li>
                                <Link to='/'>
                                <img src={surf} alt='nav-icon'/><span>Surf</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={travel} alt='nav-icon'/><span>Travel</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={camp} alt='nav-icon'/><span>Sleep</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <img src={shop} alt='nav-icon'/><span>Shop</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__search'>
                        <img src={search} alt='search'/>
                    </div>
                    <div className='header__date'>
                        20
                        <span>
                            05 | 2021
                        </span>
                    </div>
                    <div className='header__location'>
                        California
                    </div>
                </div>
                <div className='header__slider'>
                    <div className='header__slider-item slider-item'>
                        <div className='slider-item__info'>
                            <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                            <div className='slider-item__info-title'>North Shore</div>
                            <div className='slider-item__info-suptext suptitle-left'>Condition</div>
                            <div className='slider-item__info-text'>Radical</div>
                            <Link to='' className='slider-item__info-link'>
                                <img src={arrowR} alt='=>'/>
                            </Link>
                        </div>
                    </div>
                    {/* <div className='header__slider-item slider-item'>
                        <div className='slider-item__info'>
                            <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                            <div className='slider-item__info-title'>South Shore</div>
                            <div className='slider-item__info-suptext suptitle-left'>Condition</div>
                            <div className='slider-item__info-text'>Radical</div>
                            <Link to='' className='slider-item__info-link'>
                                <img src='../images/svg/arrow.svg' alt='=>'/>
                            </Link>
                        </div>
                    </div>
                    <div className='header__slider-item slider-item'>
                        <div className='slider-item__info'>
                            <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                            <div className='slider-item__info-title'>West Shore</div>
                            <div className='slider-item__info-suptext suptitle-left'>Condition</div>
                            <div className='slider-item__info-text'>Radical</div>
                            <Link to='' className='slider-item__info-link'>
                                <img src='../images/svg/arrow.svg' alt='=>'/>
                            </Link>
                        </div>
                    </div>
                    <div className='header__slider-item slider-item'>
                        <div className='slider-item__info'>
                            <div className='slider-item__info-suptitle suptitle-left'>Surf</div>
                            <div className='slider-item__info-title'>East Shore</div>
                            <div className='slider-item__info-suptext suptitle-left'>Condition</div>
                            <div className='slider-item__info-text'>Radical</div>
                            <Link to='' className='slider-item__info-link'>
                                <img src='../images/svg/arrow.svg' alt='=>'/>
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className='slider-dots'>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                    <div className='slider-dots__item'>
                        <div className='dots-box'>
                            <div className='dots-box__number'>01</div>
                            <div className='dots-box__name'>North Shore</div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;
