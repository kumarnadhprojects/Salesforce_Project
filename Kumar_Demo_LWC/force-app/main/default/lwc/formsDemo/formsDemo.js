import { LightningElement} from 'lwc';

export default class FormsDemo extends LightningElement {
    value = '';
    value1 = '';
    firstName = '';
    lastName = '';

    get options() {
        return [
            { label: 'Developer', value: 'Developer' },
            { label: 'Architect/CTO', value: 'Architect/CTO' },
            { label: 'Administrator', value: 'Administrator' },
            { label: 'IT Manager/Executive', value: 'IT Manager/Executive' },
            { label: 'Business Manager/Executive', value: 'Business Manager/Executive' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    get options1() {
        return [
            { label: 'Aland Islands', value: 'Aland Islands' },
            { label: 'Andorra', value: 'Andorra' },
            { label: 'Argentina', value: 'Argentina' },
            { label: 'Armenia', value: 'Armenia' },
            { label: 'Australia', value: 'Australia' },
            { label: 'Austria', value: 'Austria' },
            { label: 'Azerbaijan', value: 'Azerbaijan' },
            { label: 'Bangladesh', value: 'Bangladesh' },
            { label: 'Belarus', value: 'Belarus' },
            { label: 'Belgium', value: 'Belgium' },
            { label: 'Brazil', value: 'Brazil' },
            { label: 'British Indian Ocean Territory', value: 'British Indian Ocean Territory' },
            { label: 'British Virgin Islands', value: 'British Virgin Islands' },
            { label: 'Bulgaria', value: 'Bulgaria' },
            { label: 'Canada', value: 'Canada' },
            { label: 'Chile', value: 'Chile' },
            { label: 'China', value: 'China' },
            { label: 'Colombia', value: 'Colombia' },
            { label: 'Croatia', value: 'Croatia' },
            { label: 'Cyprus', value: 'Cyprus' },
            { label: 'Czech Republic', value: 'Czech Republic' },
            { label: 'Denmark', value: 'Denmark' },
            { label: 'Egypt', value: 'Egypt' },
            { label: 'Estonia', value: 'Estonia' },
            { label: 'Falkland Islands', value: 'Falkland Islands' },
            { label: 'Faroe Islands', value: 'Faroe Islands' },
            { label: 'Fiji', value: 'Fiji' },
            { label: 'Finland', value: 'Finland' },
            { label: 'France', value: 'France' },
            { label: 'French Polynesia', value: 'French Polynesia' },
            { label: 'French Southern Territories', value: 'French Southern Territories' },
            { label: 'Georgia', value: 'AustrGeorgiaalia' },
            { label: 'Germany', value: 'Germany' },
            { label: 'Gibraltar', value: 'Gibraltar' },
            { label: 'Greece', value: 'Greece' },
            { label: 'Greenland', value: 'Greenland' },
            { label: 'Guadeloupe', value: 'Guadeloupe' },
            { label: 'Guernsey', value: 'Guernsey' },
            { label: 'Hong Kong', value: 'Hong Kong' },
            { label: 'Hungary', value: 'Hungary' },
            { label: 'Iceland', value: 'Iceland' },
            { label: 'India', value: 'India' },
            { label: 'Indonesia', value: 'Indonesia' },
            { label: 'Isle of Man', value: 'Isle of Man' },
            { label: 'Israel', value: 'Israel' },
            { label: 'Italy', value: 'Italy' },
            { label: 'Japan', value: 'Japan' },
            { label: 'Jersey', value: 'Jersey' },
            { label: 'Jordan', value: 'Jordan' },
            { label: 'Kenya', value: 'Kenya' },
            { label: 'Kuwait', value: 'Kuwait' },
            { label: 'Latvia', value: 'Latvia' },
            { label: 'Lebanon', value: 'Lebanon' },
            { label: 'Liechtenstein', value: 'Liechtenstein' },
            { label: 'Lithuania', value: 'Lithuania' },
            { label: 'Luxembourg', value: 'Luxembourg' },
            { label: 'Macau SAR', value: 'Macau SAR' },
            { label: 'Macedonia', value: 'Macedonia' },
            { label: 'Malaysia', value: 'Malaysia' },
            { label: 'Malta', value: 'Malta' },
            { label: 'Martinique', value: 'Martinique' },
            { label: 'Mayotte', value: 'Mayotte' },
            { label: 'Mexico', value: 'Mexico' },
            { label: 'Moldova', value: 'Moldova' },
            { label: 'Monaco', value: 'Monaco' },
            { label: 'Montenegro', value: 'Montenegro' },
            { label: 'Morocco', value: 'Morocco' },
            { label: 'New Caledonia', value: 'New Caledonia' },
            { label: 'New Zealand', value: 'New Zealand' },
            { label: 'Nigeria', value: 'Nigeria' },
            { label: 'Norway', value: 'Norway' },
            { label: 'Panama', value: 'Panama' },
            { label: 'Philippines', value: 'Philippines' },
            { label: 'Poland', value: 'Poland' },
            { label: 'Portugal', value: 'Portugal' },
            { label: 'Republic of Ireland', value: 'Republic of Ireland' },
            { label: 'Reunion', value: 'Reunion' },
            { label: 'Romania', value: 'Romania' },
            { label: 'Russia', value: 'Russia' },
            { label: 'Saint Helena', value: 'Saint Helena' },
            { label: 'Saint Martin', value: 'Saint Martin' },
            { label: 'Saint Pierre and Miquelon', value: 'Saint Pierre and Miquelon' },
            { label: 'San Marino', value: 'San Marino' },
            { label: 'Saudi Arabia', value: 'Saudi Arabia' },
            { label: 'Serbia', value: 'Serbia' },
            { label: 'Singapore', value: 'Singapore' },
            { label: 'Slovakia', value: 'Slovakia' },
            { label: 'Slovenia', value: 'Slovenia' },
            { label: 'South Africa', value: 'South Africa' },
            { label: 'South Georgia & the S. Sandwich Islands', value: 'South Georgia & the S. Sandwich Islands' },
            { label: 'South Korea', value: 'South Korea' },
            { label: 'Spain', value: 'Spain' },
            { label: 'Sri Lanka', value: 'Sri Lanka' },
            { label: 'Svalbard and Jan Mayen Islands', value: 'Svalbard and Jan Mayen Islands' },
            { label: 'Sweden', value: 'Sweden' },
            { label: 'Switzerland', value: 'Switzerland' },
            { label: 'Taiwan', value: 'Taiwan' },
            { label: 'Thailand', value: 'Thailand' },
            { label: 'The Netherlands', value: 'The Netherlands' },
            { label: 'Turkey', value: 'Turkey' },
            { label: 'UAE', value: 'UAE' },
            { label: 'Ukraine', value: 'Ukraine' },
            { label: 'United Kingdom', value: 'United Kingdom' },
            { label: 'United States', value: 'United States' },
            { label: 'Uruguay', value: 'Uruguay' },
            { label: 'Vatican City', value: 'Vatican City' },
            { label: 'Vietnam', value: 'Vietnam' },
        ];
    }

    handleChange1(event) {
        this.value1 = event.detail.value;
    }

    handleClick(){
        alert(`${this.value},${this.value1},${this.firstName},${this.lastName}`);
    }

    changefirstName(event){
        this.firstName = event.target.value;
    }

    changelastName(event){
        this.lastName = event.target.value;
    }
}