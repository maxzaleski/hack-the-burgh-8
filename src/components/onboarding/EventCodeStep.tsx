import { OnboardingHeader, WhiteButton } from '../common';
import { OnboardingInput } from '../common/OnboardingInput';
import React from 'react';

export const EventCodeStep = (props) => {
  const [code, setCode] = React.useState('');

  return (
    <OnboardingHeader step="1/2">
      <div className="flex flex-col">
        <svg
          width="312"
          height="132"
          viewBox="0 0 312 132"
          className="mb-[56px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.52154 52.4384V12.9863H30.7171V21.6164H13.1426V28.3973H29.2652V37.0274H13.1426V43.8082H30.6406V52.4384H2.52154ZM45.6062 35.7945V52.4384H35.0616V22.8493H45.0714V28.4743H45.3771C46.0138 26.5994 47.1345 25.1288 48.7391 24.063C50.3564 22.997 52.2413 22.464 54.3935 22.464C56.4693 22.464 58.2714 22.9457 59.7995 23.9088C61.3405 24.8591 62.5312 26.1691 63.3718 27.8386C64.225 29.5081 64.6452 31.4153 64.6325 33.5599V52.4384H54.0879V35.7945C54.1006 34.3305 53.7312 33.1811 52.9799 32.3463C52.2413 31.5116 51.2097 31.0941 49.8853 31.0941C49.0193 31.0941 48.2616 31.2868 47.6121 31.672C46.9753 32.0445 46.485 32.5839 46.1411 33.2902C45.7973 33.9838 45.619 34.8185 45.6062 35.7945ZM86.2602 22.8493V30.5548H66.9283V22.8493H86.2602ZM70.6724 15.7603H81.2171V42.9221C81.2171 43.3331 81.2871 43.6798 81.4272 43.9623C81.5673 44.232 81.7838 44.4375 82.0767 44.5787C82.3696 44.7072 82.7453 44.7714 83.2038 44.7714C83.5221 44.7714 83.8914 44.7329 84.3117 44.6558C84.7447 44.5787 85.0631 44.5146 85.2668 44.4632L86.7951 51.9375C86.3238 52.0788 85.6489 52.2521 84.7701 52.4576C83.9041 52.6631 82.8727 52.7979 81.6755 52.8622C79.2559 52.9906 77.2247 52.7401 75.5818 52.1109C73.939 51.4688 72.7036 50.4606 71.8758 49.0865C71.0481 47.7123 70.6469 45.9914 70.6724 43.9238V15.7603ZM103.232 52.9777C100.099 52.9777 97.3987 52.3742 95.1322 51.167C92.8783 49.9469 91.1399 48.2003 89.917 45.9272C88.7071 43.6413 88.1022 40.9058 88.1022 37.7209C88.1022 34.6644 88.7135 31.9932 89.9358 29.7072C91.1587 27.4212 92.8845 25.6425 95.1134 24.3712C97.3413 23.0997 99.9718 22.464 103.002 22.464C105.218 22.464 107.224 22.8108 109.02 23.5043C110.816 24.1978 112.35 25.2059 113.624 26.5287C114.897 27.8386 115.878 29.4311 116.565 31.3061C117.253 33.1811 117.597 35.2936 117.597 37.6439V40.1096H91.3882V34.2535H107.893C107.88 33.4059 107.663 32.661 107.243 32.0189C106.836 31.3638 106.282 30.8566 105.582 30.497C104.894 30.1246 104.11 29.9383 103.232 29.9383C102.378 29.9383 101.595 30.1246 100.882 30.497C100.169 30.8566 99.5961 31.3574 99.1631 31.9996C98.7426 32.6417 98.5194 33.393 98.4943 34.2535V40.5719C98.4943 41.5222 98.6915 42.3698 99.086 43.1147C99.4814 43.8596 100.048 44.4439 100.787 44.8677C101.525 45.2915 102.417 45.5034 103.461 45.5034C104.186 45.5034 104.849 45.4007 105.447 45.1952C106.058 44.9898 106.581 44.6944 107.014 44.309C107.447 43.911 107.766 43.4358 107.969 42.8835H117.597C117.265 44.9383 116.483 46.7235 115.247 48.2389C114.012 49.7414 112.376 50.9101 110.338 51.7449C108.313 52.5667 105.944 52.9777 103.232 52.9777ZM120.824 52.4384V22.8493H131.062V28.4743H131.368C131.903 26.3939 132.751 24.872 133.909 23.9088C135.081 22.9457 136.45 22.464 138.016 22.464C138.474 22.464 138.927 22.5026 139.373 22.5796C139.831 22.6439 140.27 22.7402 140.69 22.8685V31.9417C140.169 31.762 139.525 31.6271 138.761 31.5372C137.997 31.4474 137.341 31.4024 136.793 31.4024C135.762 31.4024 134.832 31.6399 134.005 32.1151C133.19 32.5775 132.546 33.2324 132.076 34.08C131.604 34.9148 131.368 35.8972 131.368 37.0274V52.4384H120.824ZM159.132 63.5342C157.921 63.5342 156.769 63.4379 155.674 63.2453C154.579 63.0655 153.617 62.8151 152.789 62.494L155.082 54.9426C155.948 55.2509 156.737 55.4499 157.451 55.5398C158.176 55.6297 158.794 55.5783 159.304 55.3857C159.826 55.1931 160.201 54.827 160.431 54.2877L160.659 53.7483L150.345 22.8493H161.347L166.085 43.3459H166.39L171.205 22.8493H182.284L171.587 54.9041C171.051 56.5351 170.275 57.9992 169.256 59.2962C168.25 60.6062 166.925 61.64 165.283 62.3977C163.64 63.1554 161.589 63.5342 159.132 63.5342ZM197.45 52.9777C194.267 52.9777 191.541 52.3421 189.275 51.0706C187.007 49.7864 185.269 48.0013 184.059 45.7153C182.849 43.4165 182.245 40.7517 182.245 37.7209C182.245 34.69 182.849 32.0317 184.059 29.7457C185.269 27.447 187.007 25.6618 189.275 24.3904C191.541 23.1061 194.267 22.464 197.45 22.464C200.634 22.464 203.359 23.1061 205.626 24.3904C207.893 25.6618 209.631 27.447 210.841 29.7457C212.051 32.0317 212.656 34.69 212.656 37.7209C212.656 40.7517 212.051 43.4165 210.841 45.7153C209.631 48.0013 207.893 49.7864 205.626 51.0706C203.359 52.3421 200.634 52.9777 197.45 52.9777ZM197.526 45.1181C198.418 45.1181 199.189 44.8163 199.838 44.2128C200.488 43.6092 200.991 42.7487 201.347 41.6314C201.704 40.5141 201.882 39.1849 201.882 37.6439C201.882 36.0899 201.704 34.7607 201.347 33.6563C200.991 32.539 200.488 31.6786 199.838 31.0749C199.189 30.4713 198.418 30.1695 197.526 30.1695C196.584 30.1695 195.776 30.4713 195.1 31.0749C194.425 31.6786 193.91 32.539 193.553 33.6563C193.197 34.7607 193.019 36.0899 193.019 37.6439C193.019 39.1849 193.197 40.5141 193.553 41.6314C193.91 42.7487 194.425 43.6092 195.1 44.2128C195.776 44.8163 196.584 45.1181 197.526 45.1181ZM234.885 39.4931V22.8493H245.43V52.4384H235.42V46.8133H235.114C234.478 48.7012 233.363 50.1781 231.771 51.244C230.18 52.297 228.288 52.8236 226.098 52.8236C224.047 52.8236 222.252 52.3485 220.711 51.3981C219.183 50.4478 217.992 49.1378 217.139 47.4683C216.298 45.7988 215.872 43.8853 215.859 41.7277V22.8493H226.404V39.4931C226.416 40.9572 226.785 42.1066 227.512 42.9413C228.25 43.7761 229.281 44.1935 230.607 44.1935C231.485 44.1935 232.243 44.0073 232.879 43.6349C233.529 43.2495 234.026 42.7102 234.369 42.0167C234.726 41.3104 234.898 40.4692 234.885 39.4931ZM249.717 52.4384V22.8493H259.956V28.4743H260.262C260.797 26.3939 261.643 24.872 262.803 23.9088C263.974 22.9457 265.343 22.464 266.91 22.464C267.368 22.464 267.82 22.5026 268.266 22.5796C268.724 22.6439 269.164 22.7402 269.584 22.8685V31.9417C269.061 31.762 268.419 31.6271 267.655 31.5372C266.89 31.4474 266.235 31.4024 265.687 31.4024C264.656 31.4024 263.726 31.6399 262.898 32.1151C262.083 32.5775 261.44 33.2324 260.968 34.08C260.498 34.9148 260.262 35.8972 260.262 37.0274V52.4384H249.717ZM16.734 118.978C13.6011 118.978 10.9013 118.374 8.6344 117.167C6.38029 115.947 4.64194 114.2 3.41937 111.927C2.20954 109.641 1.60461 106.906 1.60461 103.721C1.60461 100.664 2.2159 97.9928 3.43848 95.7072C4.66104 93.4216 6.38665 91.6423 8.6153 90.3712C10.844 89.0997 13.4737 88.464 16.5047 88.464C18.7206 88.464 20.7264 88.8108 22.522 89.5043C24.3177 90.1978 25.8522 91.2057 27.1258 92.5284C28.3993 93.8384 29.3799 95.4315 30.0676 97.3057C30.7553 99.1808 31.0991 101.294 31.0991 103.644V106.11H4.89028V100.253H21.3949C21.3822 99.4059 21.1658 98.661 20.7455 98.019C20.338 97.3636 19.784 96.8564 19.0835 96.4974C18.3959 96.1249 17.6127 95.9387 16.734 95.9387C15.8807 95.9387 15.0975 96.1249 14.3843 96.4974C13.6712 96.8564 13.0981 97.3572 12.665 97.9991C12.2448 98.642 12.0219 99.3933 11.9965 100.253V106.572C11.9965 107.522 12.1939 108.37 12.5887 109.115C12.9834 109.859 13.5501 110.444 14.2888 110.867C15.0275 111.291 15.9189 111.504 16.9632 111.504C17.689 111.504 18.3513 111.401 18.9499 111.196C19.5611 110.989 20.0833 110.695 20.5162 110.31C20.9493 109.911 21.2676 109.436 21.4714 108.884H31.0991C30.768 110.939 29.9848 112.723 28.7495 114.239C27.5142 115.741 25.8777 116.91 23.8401 117.745C21.8152 118.567 19.4465 118.978 16.734 118.978ZM63.1616 88.8493L53.3047 118.438H41.0789L31.222 88.8493H42.3015L47.0389 108.421H47.3446L52.082 88.8493H63.1616ZM78.2514 118.978C75.1186 118.978 72.4187 118.374 70.1518 117.167C67.8977 115.947 66.1594 114.2 64.9368 111.927C63.727 109.641 63.1221 106.906 63.1221 103.721C63.1221 100.664 63.7333 97.9928 64.956 95.7072C66.1785 93.4216 67.9041 91.6423 70.1327 90.3712C72.3614 89.0997 74.9912 88.464 78.0221 88.464C80.2381 88.464 82.2438 88.8108 84.0395 89.5043C85.8351 90.1978 87.3698 91.2057 88.6432 92.5284C89.917 93.8384 90.8978 95.4315 91.5854 97.3057C92.2731 99.1808 92.6165 101.294 92.6165 103.644V106.11H66.4078V100.253H82.9125C82.8997 99.4059 82.6832 98.661 82.2629 98.019C81.8554 97.3636 81.3015 96.8564 80.601 96.4974C79.9133 96.1249 79.1301 95.9387 78.2514 95.9387C77.3981 95.9387 76.6149 96.1249 75.9018 96.4974C75.1886 96.8564 74.6155 97.3572 74.1825 97.9991C73.7623 98.642 73.5394 99.3933 73.5139 100.253V106.572C73.5139 107.522 73.7113 108.37 74.1061 109.115C74.5009 109.859 75.0676 110.444 75.8062 110.867C76.5449 111.291 77.4363 111.504 78.4806 111.504C79.2065 111.504 79.8688 111.401 80.4673 111.196C81.0786 110.989 81.6007 110.695 82.0337 110.31C82.4667 109.911 82.7851 109.436 82.9889 108.884H92.6165C92.2856 110.939 91.5021 112.723 90.2666 114.239C89.0316 115.741 87.3952 116.91 85.3575 117.745C83.3327 118.567 80.964 118.978 78.2514 118.978ZM106.388 101.795V118.438H95.8432V88.8493H105.853V94.474H106.159C106.795 92.5989 107.916 91.1288 109.521 90.063C111.138 88.997 113.023 88.464 115.176 88.464C117.251 88.464 119.053 88.9457 120.582 89.9088C122.123 90.8594 123.314 92.1694 124.154 93.8384C125.007 95.5083 125.428 97.4151 125.414 99.5596V118.438H114.87V101.795C114.882 100.331 114.513 99.1808 113.762 98.3463C113.023 97.5118 111.992 97.0941 110.668 97.0941C109.802 97.0941 109.043 97.2867 108.394 97.6719C107.757 98.0443 107.267 98.5841 106.923 99.2902C106.579 99.9837 106.401 100.818 106.388 101.795ZM147.043 88.8493V96.5544H127.71V88.8493H147.043ZM131.454 81.7603H141.999V108.922C141.999 109.333 142.069 109.679 142.209 109.962C142.349 110.232 142.566 110.438 142.858 110.579C143.152 110.707 143.527 110.771 143.985 110.771C144.304 110.771 144.674 110.733 145.093 110.656C145.526 110.579 145.845 110.515 146.049 110.463L147.577 117.937C147.106 118.079 146.431 118.252 145.552 118.457C144.686 118.663 143.654 118.798 142.458 118.862C140.038 118.991 138.006 118.74 136.364 118.111C134.721 117.469 133.486 116.46 132.658 115.087C131.83 113.713 131.429 111.991 131.454 109.923V81.7603Z"
            fill="white"
          />
          <path d="M311.931 74.7728H164.069V131.364H311.931V74.7728Z" fill="white" />
          <path
            d="M204.782 98.878H195.311C195.244 98.0878 195.065 97.3708 194.773 96.7271C194.493 96.0834 194.102 95.5301 193.598 95.0672C193.106 94.5934 192.506 94.2318 191.801 93.9831C191.096 93.7236 190.295 93.5944 189.399 93.5944C187.832 93.5944 186.505 93.9777 185.419 94.7453C184.344 95.5129 183.528 96.6141 182.967 98.048C182.419 99.4819 182.144 101.203 182.144 103.213C182.144 105.336 182.424 107.114 182.984 108.547C183.556 109.97 184.379 111.043 185.453 111.765C186.528 112.477 187.82 112.832 189.332 112.832C190.194 112.832 190.966 112.725 191.65 112.51C192.333 112.285 192.926 111.963 193.43 111.545C193.934 111.128 194.342 110.625 194.656 110.038C194.98 109.44 195.199 108.768 195.311 108.022L204.782 108.09C204.67 109.558 204.261 111.054 203.557 112.578C202.851 114.091 201.849 115.491 200.551 116.778C199.263 118.054 197.667 119.081 195.764 119.861C193.86 120.639 191.65 121.029 189.131 121.029C185.974 121.029 183.141 120.346 180.633 118.98C178.137 117.614 176.161 115.604 174.705 112.95C173.26 110.298 172.539 107.051 172.539 103.213C172.539 99.3517 173.277 96.1006 174.756 93.4587C176.233 90.8052 178.226 88.8013 180.734 87.4465C183.242 86.0804 186.041 85.3973 189.131 85.3973C191.303 85.3973 193.301 85.6965 195.126 86.2949C196.951 86.8933 198.552 87.7683 199.929 88.9198C201.306 90.0601 202.414 91.4661 203.254 93.1369C204.094 94.8077 204.603 96.7217 204.782 98.878ZM241.391 103.213C241.391 107.074 240.646 110.331 239.158 112.985C237.669 115.627 235.659 117.631 233.129 118.996C230.598 120.351 227.777 121.029 224.665 121.029C221.53 121.029 218.698 120.346 216.168 118.98C213.648 117.602 211.644 115.593 210.155 112.95C208.677 110.298 207.938 107.051 207.938 103.213C207.938 99.3517 208.677 96.1006 210.155 93.4587C211.644 90.8052 213.648 88.8013 216.168 87.4465C218.698 86.0804 221.53 85.3973 224.665 85.3973C227.777 85.3973 230.598 86.0804 233.129 87.4465C235.659 88.8013 237.669 90.8052 239.158 93.4587C240.646 96.1006 241.391 99.3517 241.391 103.213ZM231.785 103.213C231.785 101.136 231.511 99.3861 230.962 97.963C230.425 96.5291 229.624 95.4451 228.561 94.7118C227.508 93.9669 226.21 93.5944 224.665 93.5944C223.119 93.5944 221.815 93.9669 220.752 94.7118C219.699 95.4451 218.899 96.5291 218.351 97.963C217.813 99.3861 217.545 101.136 217.545 103.213C217.545 105.291 217.813 107.047 218.351 108.48C218.899 109.903 219.699 110.986 220.752 111.732C221.815 112.465 223.119 112.832 224.665 112.832C226.21 112.832 227.508 112.465 228.561 111.732C229.624 110.986 230.425 109.903 230.962 108.48C231.511 107.047 231.785 105.291 231.785 103.213ZM257.999 120.555H244.766V85.8715H257.864C261.402 85.8715 264.459 86.5658 267.033 87.9545C269.62 89.3319 271.613 91.3187 273.013 93.9153C274.423 96.5011 275.128 99.6004 275.128 103.213C275.128 106.826 274.428 109.931 273.029 112.527C271.629 115.113 269.648 117.1 267.085 118.488C264.52 119.866 261.492 120.555 257.999 120.555ZM254.102 112.562H257.663C259.364 112.562 260.814 112.285 262.013 111.732C263.221 111.178 264.139 110.225 264.767 108.869C265.404 107.514 265.724 105.629 265.724 103.213C265.724 100.797 265.399 98.9114 264.75 97.5571C264.112 96.2018 263.171 95.248 261.928 94.6947C260.697 94.1413 259.186 93.8647 257.395 93.8647H254.102V112.562ZM278.503 120.555V85.8715H303.29V93.4587H287.84V99.4195H302.013V107.007H287.84V112.968H303.223V120.555H278.503Z"
            fill="#171717"
          />
        </svg>
        <OnboardingInput
          label="Event Code"
          placeholder="TBD"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <WhiteButton title="Continue" disabled={!code} />
      </div>
    </OnboardingHeader>
  );
};