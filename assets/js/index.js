// navbar class add 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 120) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

// select country 
(function($) {
  $(function() {
      var isoCountries = [
          { id: 'AF', text: 'Afghanistan'},
          { id: 'AX', text: 'Aland Islands'},
          { id: 'AL', text: 'Albania'},
          { id: 'DZ', text: 'Algeria'},
          { id: 'AS', text: 'American Samoa'},
          { id: 'AD', text: 'Andorra'},
          { id: 'AO', text: 'Angola'},
          { id: 'AI', text: 'Anguilla'},
          { id: 'AQ', text: 'Antarctica'},
          { id: 'AG', text: 'Antigua And Barbuda'},
          { id: 'AR', text: 'Argentina'},
          { id: 'AM', text: 'Armenia'},
          { id: 'AW', text: 'Aruba'},
          { id: 'AU', text: 'Australia'},
          { id: 'AT', text: 'Austria'},
          { id: 'AZ', text: 'Azerbaijan'},
          { id: 'BS', text: 'Bahamas'},
          { id: 'BH', text: 'Bahrain'},
          { id: 'BD', text: 'Bangladesh'},
          { id: 'BB', text: 'Barbados'},
          { id: 'BY', text: 'Belarus'},
          { id: 'BE', text: 'Belgium'},
          { id: 'BZ', text: 'Belize'},
          { id: 'BJ', text: 'Benin'},
          { id: 'BM', text: 'Bermuda'},
          { id: 'BT', text: 'Bhutan'},
          { id: 'BO', text: 'Bolivia'},
          { id: 'BA', text: 'Bosnia And Herzegovina'},
          { id: 'BW', text: 'Botswana'},
          { id: 'BV', text: 'Bouvet Island'},
          { id: 'BR', text: 'Brazil'},
          { id: 'IO', text: 'British Indian Ocean Territory'},
          { id: 'BN', text: 'Brunei Darussalam'},
          { id: 'BG', text: 'Bulgaria'},
          { id: 'BF', text: 'Burkina Faso'},
          { id: 'BI', text: 'Burundi'},
          { id: 'KH', text: 'Cambodia'},
          { id: 'CM', text: 'Cameroon'},
          { id: 'CA', text: 'Canada'},
          { id: 'CV', text: 'Cape Verde'},
          { id: 'KY', text: 'Cayman Islands'},
          { id: 'CF', text: 'Central African Republic'},
          { id: 'TD', text: 'Chad'},
          { id: 'CL', text: 'Chile'},
          { id: 'CN', text: 'China'},
          { id: 'CX', text: 'Christmas Island'},
          { id: 'CC', text: 'Cocos (Keeling) Islands'},
          { id: 'CO', text: 'Colombia'},
          { id: 'KM', text: 'Comoros'},
          { id: 'CG', text: 'Congo'},
          { id: 'CD', text: 'Congo}, Democratic Republic'},
          { id: 'CK', text: 'Cook Islands'},
          { id: 'CR', text: 'Costa Rica'},
          { id: 'CI', text: 'Cote D\'Ivoire'},
          { id: 'HR', text: 'Croatia'},
          { id: 'CU', text: 'Cuba'},
          { id: 'CY', text: 'Cyprus'},
          { id: 'CZ', text: 'Czech Republic'},
          { id: 'DK', text: 'Denmark'},
          { id: 'DJ', text: 'Djibouti'},
          { id: 'DM', text: 'Dominica'},
          { id: 'DO', text: 'Dominican Republic'},
          { id: 'EC', text: 'Ecuador'},
          { id: 'EG', text: 'Egypt'},
          { id: 'SV', text: 'El Salvador'},
          { id: 'GQ', text: 'Equatorial Guinea'},
          { id: 'ER', text: 'Eritrea'},
          { id: 'EE', text: 'Estonia'},
          { id: 'ET', text: 'Ethiopia'},
          { id: 'FK', text: 'Falkland Islands (Malvinas)'},
          { id: 'FO', text: 'Faroe Islands'},
          { id: 'FJ', text: 'Fiji'},
          { id: 'FI', text: 'Finland'},
          { id: 'FR', text: 'France'},
          { id: 'GF', text: 'French Guiana'},
          { id: 'PF', text: 'French Polynesia'},
          { id: 'TF', text: 'French Southern Territories'},
          { id: 'GA', text: 'Gabon'},
          { id: 'GM', text: 'Gambia'},
          { id: 'GE', text: 'Georgia'},
          { id: 'DE', text: 'Germany'},
          { id: 'GH', text: 'Ghana'},
          { id: 'GI', text: 'Gibraltar'},
          { id: 'GR', text: 'Greece'},
          { id: 'GL', text: 'Greenland'},
          { id: 'GD', text: 'Grenada'},
          { id: 'GP', text: 'Guadeloupe'},
          { id: 'GU', text: 'Guam'},
          { id: 'GT', text: 'Guatemala'},
          { id: 'GG', text: 'Guernsey'},
          { id: 'GN', text: 'Guinea'},
          { id: 'GW', text: 'Guinea-Bissau'},
          { id: 'GY', text: 'Guyana'},
          { id: 'HT', text: 'Haiti'},
          { id: 'HM', text: 'Heard Island & Mcdonald Islands'},
          { id: 'VA', text: 'Holy See (Vatican City State)'},
          { id: 'HN', text: 'Honduras'},
          { id: 'HK', text: 'Hong Kong'},
          { id: 'HU', text: 'Hungary'},
          { id: 'IS', text: 'Iceland'},
          { id: 'IN', text: 'India'},
          { id: 'ID', text: 'Indonesia'},
          { id: 'IR', text: 'Iran}, Islamic Republic Of'},
          { id: 'IQ', text: 'Iraq'},
          { id: 'IE', text: 'Ireland'},
          { id: 'IM', text: 'Isle Of Man'},
          { id: 'IL', text: 'Israel'},
          { id: 'IT', text: 'Italy'},
          { id: 'JM', text: 'Jamaica'},
          { id: 'JP', text: 'Japan'},
          { id: 'JE', text: 'Jersey'},
          { id: 'JO', text: 'Jordan'},
          { id: 'KZ', text: 'Kazakhstan'},
          { id: 'KE', text: 'Kenya'},
          { id: 'KI', text: 'Kiribati'},
          { id: 'KR', text: 'Korea'},
          { id: 'KW', text: 'Kuwait'},
          { id: 'KG', text: 'Kyrgyzstan'},
          { id: 'LA', text: 'Lao People\'s Democratic Republic'},
          { id: 'LV', text: 'Latvia'},
          { id: 'LB', text: 'Lebanon'},
          { id: 'LS', text: 'Lesotho'},
          { id: 'LR', text: 'Liberia'},
          { id: 'LY', text: 'Libyan Arab Jamahiriya'},
          { id: 'LI', text: 'Liechtenstein'},
          { id: 'LT', text: 'Lithuania'},
          { id: 'LU', text: 'Luxembourg'},
          { id: 'MO', text: 'Macao'},
          { id: 'MK', text: 'Macedonia'},
          { id: 'MG', text: 'Madagascar'},
          { id: 'MW', text: 'Malawi'},
          { id: 'MY', text: 'Malaysia'},
          { id: 'MV', text: 'Maldives'},
          { id: 'ML', text: 'Mali'},
          { id: 'MT', text: 'Malta'},
          { id: 'MH', text: 'Marshall Islands'},
          { id: 'MQ', text: 'Martinique'},
          { id: 'MR', text: 'Mauritania'},
          { id: 'MU', text: 'Mauritius'},
          { id: 'YT', text: 'Mayotte'},
          { id: 'MX', text: 'Mexico'},
          { id: 'FM', text: 'Micronesia}, Federated States Of'},
          { id: 'MD', text: 'Moldova'},
          { id: 'MC', text: 'Monaco'},
          { id: 'MN', text: 'Mongolia'},
          { id: 'ME', text: 'Montenegro'},
          { id: 'MS', text: 'Montserrat'},
          { id: 'MA', text: 'Morocco'},
          { id: 'MZ', text: 'Mozambique'},
          { id: 'MM', text: 'Myanmar'},
          { id: 'NA', text: 'Namibia'},
          { id: 'NR', text: 'Nauru'},
          { id: 'NP', text: 'Nepal'},
          { id: 'NL', text: 'Netherlands'},
          { id: 'AN', text: 'Netherlands Antilles'},
          { id: 'NC', text: 'New Caledonia'},
          { id: 'NZ', text: 'New Zealand'},
          { id: 'NI', text: 'Nicaragua'},
          { id: 'NE', text: 'Niger'},
          { id: 'NG', text: 'Nigeria'},
          { id: 'NU', text: 'Niue'},
          { id: 'NF', text: 'Norfolk Island'},
          { id: 'MP', text: 'Northern Mariana Islands'},
          { id: 'NO', text: 'Norway'},
          { id: 'OM', text: 'Oman'},
          { id: 'PK', text: 'Pakistan'},
          { id: 'PW', text: 'Palau'},
          { id: 'PS', text: 'Palestinian Territory}, Occupied'},
          { id: 'PA', text: 'Panama'},
          { id: 'PG', text: 'Papua New Guinea'},
          { id: 'PY', text: 'Paraguay'},
          { id: 'PE', text: 'Peru'},
          { id: 'PH', text: 'Philippines'},
          { id: 'PN', text: 'Pitcairn'},
          { id: 'PL', text: 'Poland'},
          { id: 'PT', text: 'Portugal'},
          { id: 'PR', text: 'Puerto Rico'},
          { id: 'QA', text: 'Qatar'},
          { id: 'RE', text: 'Reunion'},
          { id: 'RO', text: 'Romania'},
          { id: 'RU', text: 'Russian Federation'},
          { id: 'RW', text: 'Rwanda'},
          { id: 'BL', text: 'Saint Barthelemy'},
          { id: 'SH', text: 'Saint Helena'},
          { id: 'KN', text: 'Saint Kitts And Nevis'},
          { id: 'LC', text: 'Saint Lucia'},
          { id: 'MF', text: 'Saint Martin'},
          { id: 'PM', text: 'Saint Pierre And Miquelon'},
          { id: 'VC', text: 'Saint Vincent And Grenadines'},
          { id: 'WS', text: 'Samoa'},
          { id: 'SM', text: 'San Marino'},
          { id: 'ST', text: 'Sao Tome And Principe'},
          { id: 'SA', text: 'Saudi Arabia'},
          { id: 'SN', text: 'Senegal'},
          { id: 'RS', text: 'Serbia'},
          { id: 'SC', text: 'Seychelles'},
          { id: 'SL', text: 'Sierra Leone'},
          { id: 'SG', text: 'Singapore'},
          { id: 'SK', text: 'Slovakia'},
          { id: 'SI', text: 'Slovenia'},
          { id: 'SB', text: 'Solomon Islands'},
          { id: 'SO', text: 'Somalia'},
          { id: 'ZA', text: 'South Africa'},
          { id: 'GS', text: 'South Georgia And Sandwich Isl.'},
          { id: 'ES', text: 'Spain'},
          { id: 'LK', text: 'Sri Lanka'},
          { id: 'SD', text: 'Sudan'},
          { id: 'SR', text: 'Suriname'},
          { id: 'SJ', text: 'Svalbard And Jan Mayen'},
          { id: 'SZ', text: 'Swaziland'},
          { id: 'SE', text: 'Sweden'},
          { id: 'CH', text: 'Switzerland'},
          { id: 'SY', text: 'Syrian Arab Republic'},
          { id: 'TW', text: 'Taiwan'},
          { id: 'TJ', text: 'Tajikistan'},
          { id: 'TZ', text: 'Tanzania'},
          { id: 'TH', text: 'Thailand'},
          { id: 'TL', text: 'Timor-Leste'},
          { id: 'TG', text: 'Togo'},
          { id: 'TK', text: 'Tokelau'},
          { id: 'TO', text: 'Tonga'},
          { id: 'TT', text: 'Trinidad And Tobago'},
          { id: 'TN', text: 'Tunisia'},
          { id: 'TR', text: 'Turkey'},
          { id: 'TM', text: 'Turkmenistan'},
          { id: 'TC', text: 'Turks And Caicos Islands'},
          { id: 'TV', text: 'Tuvalu'},
          { id: 'UG', text: 'Uganda'},
          { id: 'UA', text: 'Ukraine'},
          { id: 'AE', text: 'United Arab Emirates'},
          { id: 'GB', text: 'United Kingdom'},
          { id: 'US', text: 'United States'},
          { id: 'UM', text: 'United States Outlying Islands'},
          { id: 'UY', text: 'Uruguay'},
          { id: 'UZ', text: 'Uzbekistan'},
          { id: 'VU', text: 'Vanuatu'},
          { id: 'VE', text: 'Venezuela'},
          { id: 'VN', text: 'Viet Nam'},
          { id: 'VG', text: 'Virgin Islands}, British'},
          { id: 'VI', text: 'Virgin Islands}, U.S.'},
          { id: 'WF', text: 'Wallis And Futuna'},
          { id: 'EH', text: 'Western Sahara'},
          { id: 'YE', text: 'Yemen'},
          { id: 'ZM', text: 'Zambia'},
          { id: 'ZW', text: 'Zimbabwe'}
      ];
      
      function formatCountry (country) {
        if (!country.id) { return country.text; }
        var $country = $(
          '<span class="flag-icon flag-icon-'+ country.id.toLowerCase() +' flag-icon-squared"></span>' +
          '<span class="flag-text">'+ country.text+"</span>"
        );
        return $country;
      };
      
      //Assuming you have a select element with name country
      // e.g. <select name="name"></select>
      
      $("[name='country']").select2({
          placeholder: "Select a country",
  templateResult: formatCountry,
          data: isoCountries
      });
      
      
  });
})(jQuery);     
  
// scroll to top progress 
(function($) { "use strict";
$(document).ready(function(){"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


	});
})(jQuery);


// tab js
const DOM = {
  tabsNav: document.querySelector('.tabs__nav'),
  tabsNavItems: document.querySelectorAll('.tabs__nav-item'),
  panels: document.querySelectorAll('.tabs__panel')
};

const setActiveItem = elem => {
  DOM.tabsNavItems.forEach(el => {
    el.classList.remove('js-active');
  });
  elem.classList.add('js-active');
};

const findActiveItem = () => {
  let activeIndex = 0;
  for (let i = 0; i < DOM.tabsNavItems.length; i++) {
    if (DOM.tabsNavItems[i].classList.contains('js-active')) {
      activeIndex = i;
      break;
    }
  }
  return activeIndex;
};

const findActiveItemParams = (activeItemIndex) => {
  const activeTab = DOM.tabsNavItems[activeItemIndex];
  const activeItemWidth = activeTab.offsetWidth - 1;
  const activeItemHeight = activeTab.offsetHeight; // Add this line
  const activeItemOffset_left = activeTab.offsetLeft;
  const activeItemOffset_top = activeTab.offsetTop; // Add this line
  return [activeItemWidth, activeItemHeight, activeItemOffset_left, activeItemOffset_top];
};

const appendDecorationNav = () => {
  let decorationElem = document.createElement('div');
  decorationElem.classList.add('tabs__nav-decoration');
  decorationElem.classList.add('js-decoration');
  DOM.tabsNav.append(decorationElem);
  return decorationElem;
};

const styleDecorElem = (elem, decorWidth, decorHeight, decorOffset_left, decorOffset_top) => {
  elem.style.width = `${decorWidth}px`;
  elem.style.height = `${decorHeight}px`; // Add this line
  elem.style.transform = `translate(${decorOffset_left}px, ${decorOffset_top}px)`; // Modify this line
};

const findActivePanel = index => {
  return DOM.panels[index];
};

const setActivePanel = index => {
  DOM.panels.forEach(el => {
    el.classList.remove('js-active');
  });
  DOM.panels[index].classList.add('js-active');
};

window.addEventListener('load', () => {
  const activeItemIndex = findActiveItem();
  const [decorWidth, decorHeight, decorOffset_left, decorOffset_top] = findActiveItemParams(activeItemIndex);
  const decorElem = appendDecorationNav();
  styleDecorElem(decorElem, decorWidth, decorHeight, decorOffset_left, decorOffset_top);
  findActivePanel(activeItemIndex);
  setActivePanel(activeItemIndex);
});

DOM.tabsNav.addEventListener('click', e => {
  const navElemClass = 'tabs__nav-item';
  if (e.target.classList.contains(navElemClass)) {
    const clickedTab = e.target;
    setActiveItem(clickedTab);
    const activeItemIndex = Array.from(DOM.tabsNavItems).indexOf(clickedTab);
    const [decorWidth, decorHeight, decorOffset_left, decorOffset_top] = findActiveItemParams(activeItemIndex);
    const decorElem = document.querySelector('.js-decoration');
    styleDecorElem(decorElem, decorWidth, decorHeight, decorOffset_left, decorOffset_top);
    findActivePanel(activeItemIndex);
    setActivePanel(activeItemIndex);
  }
});



// price card class add 
const checkbox1 = document.getElementById('price1');
const element1 = document.getElementById('pricingnew');

checkbox1.addEventListener('change', function() {
if (this.checked) {
    element1.classList.add('pricecard1');
} else {
    element1.classList.remove('pricecard1');
}
});


// read more and read less 
function readMore(ele,eve){
  eve.preventDefault();
  var txt = document.querySelector(".read_more_text");
  txt.classList.toggle("ellipsis3");
  if(txt.classList.contains("ellipsis3")){
    ele.innerText = "Read More";
  }
  else{
    ele.innerText = "Read Less";
  }
}

// more and less country
function readMore2(ele, eve) {
  eve.preventDefault();
  var txt = document.querySelector(".country-main");
  txt.classList.toggle("countrycontent");
  ele.classList.toggle("expanded"); // Add or remove 'expanded' class to button
  var btnText = ele.querySelector(".btn-text"); // Get the span inside the button
  if (txt.classList.contains("countrycontent")) {
    btnText.innerText = "More Country";
  } else {
    btnText.innerText = "Less Country";
  }
}



// glightbox 
var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});
var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});



// dropzone js 
// Initialize Dropzone
Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("#myDropzone", {
  url: "/file-upload",
  // Add custom remove button
  init: function() {
    this.on("addedfile", function(file) {
      var removeButton = Dropzone.createElement("<button class='btn btn-danger'>Remove</button>");
      var _this = this;
      removeButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        _this.removeFile(file);
      });
      file.previewElement.appendChild(removeButton);
    });
  }
});



// date input js 




