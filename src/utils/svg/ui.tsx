import React from 'react';
import {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';

export const Close = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx={12} cy={12} r={12} fill="#000" fillOpacity={0.4} />
      <Path
        d="M8.201 16.278a.645.645 0 00.889.005l2.91-2.91 2.905 2.91c.24.24.65.24.889-.005a.64.64 0 00.005-.888l-2.905-2.91 2.905-2.906a.635.635 0 00-.005-.888.64.64 0 00-.889-.005L12 11.59 9.09 8.68a.645.645 0 00-.889.005.643.643 0 00-.005.883l2.91 2.91-2.91 2.916c-.23.229-.239.644.005.883z"
        fill="#fff"
      />
    </Svg>
  );
};

export const Unlimited = (props: SvgProps) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <G clipPath="url(#clip0_4683_2641)" fill="#fff">
        <Path d="M4.5 16.453H2.25a.704.704 0 01-.703-.703V13.5a.422.422 0 00-.844 0v2.25a1.55 1.55 0 001.547 1.547H4.5a.422.422 0 000-.844zM16.875 13.078a.422.422 0 00-.422.422v2.25a.704.704 0 01-.703.703H13.5a.422.422 0 000 .844h2.25a1.55 1.55 0 001.547-1.547V13.5a.422.422 0 00-.422-.422zM1.125 4.922a.421.421 0 00.422-.422V2.25a.703.703 0 01.703-.703H4.5a.422.422 0 000-.844H2.25A1.55 1.55 0 00.703 2.25V4.5a.421.421 0 00.422.422zM15.75.703H13.5a.422.422 0 100 .844h2.25a.703.703 0 01.703.703V4.5a.422.422 0 00.844 0V2.25A1.55 1.55 0 0015.75.703zM4.078 5.625v2.11h9.844v-2.11a1.55 1.55 0 00-1.547-1.547h-6.75a1.55 1.55 0 00-1.547 1.547z" />
        <Path
          d="M13.922 12.375V9.422h1.828a.422.422 0 100-.844H2.25a.422.422 0 000 .844h1.828v2.953a1.55 1.55 0 001.547 1.547h6.75a1.55 1.55 0 001.547-1.547z"
          fillOpacity={0.7}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4683_2641">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const Detailed = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#clip0_4683_2673)" fill="#fff">
        <Path
          d="M1.048 3.5c.582 1.354 1.565 2.693 2.94 3.27.157.066.335.115.518.156a5.35 5.35 0 011.279-1.352c.423-.311.866-.555 1.322-.746a3.731 3.731 0 00-.412-.25c-.572-.3-1.192-.562-1.795-.845.567.153 1.218.21 1.76.408.34.125.651.296.942.5.869-.295 1.776-.437 2.682-.545-.734-1.22-2.3-2.2-3.481-2.642-1.233-.463-2.629-.52-4-.662C1.963.705 1.048.392.38.025.228-.058.066.08.118.249.447 1.3.613 2.49 1.048 3.5z"
          fillOpacity={0.7}
        />
        <Path d="M15.541 3.34c-1.546.84-3.32.944-5.058 1.143-.848.098-1.689.22-2.488.461a7.395 7.395 0 00-.517.177 6.089 6.089 0 00-1.452.785 4.922 4.922 0 00-1.082 1.106c-.474.66-.804 1.421-1.076 2.21a12.606 12.606 0 00-.678 4.474c.018.614.028 1.254.18 1.854.034.132.067.3.17.398.134.13.374-.003.32-.19-.389-1.327-.147-2.876.391-4.143.618-1.457 1.811-2.324 3.27-2.852.387-.14.783-.263 1.185-.379.008-.003.016-.003.024-.003.08 0 .115.117.032.155-.475.214-.945.43-1.393.664-2.194 1.144-3.152 3.809-2.33 3.809a.623.623 0 00.235-.056c1.269-.524 2.776-.53 4.17-.787.491-.09.969-.213 1.417-.4 1.778-.742 3.05-2.193 3.807-3.94.564-1.302.783-2.84 1.21-4.195.056-.173-.067-.322-.217-.322a.224.224 0 00-.12.031z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4683_2673">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const Faster = (props: SvgProps) => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none" {...props}>
      <Path
        d="M16.997 13.265c0-.037-.002-.074-.003-.11l-.005-.113v-.028L16.987 13V12.963l-.001-.005-.004-.047-.014-.188-.004-.047-.006-.061-.011-.123-.012-.121-.006-.06a10.654 10.654 0 01-.008-.056c-.02-.148-.038-.293-.064-.432-.012-.07-.024-.139-.037-.205l-.04-.196c-.025-.127-.057-.245-.083-.355l-.02-.08-.022-.077-.04-.14c-.012-.044-.023-.086-.035-.123l-.033-.104-.037-.116a.088.088 0 00-.108-.058l-2.874.82a.088.088 0 00-.063.1l.01.058c.005.021.01.045.014.071.005.026.008.055.013.085l.015.096.008.052.006.055c.008.075.02.155.025.242l.011.131.007.138c.006.093.005.19.007.289v.036l-.001.032-.002.065-.002.065v.032l-.003.047-.008.187-.002.047v-.022.003l-.002.01-.001.018-.007.073-.006.073-.009.072c-.006.047-.01.094-.017.14l-.02.135-.022.128-.023.12-.023.113-.024.102-.01.047c-.005.013-.008.026-.011.038l-.006.022h3.515a.088.088 0 00.088-.084l.009-.202.004-.21c.002-.072 0-.144 0-.217l-.002-.11zM16.084 9.576a.088.088 0 00.047-.12l-.034-.07-.04-.085c-.019-.038-.04-.08-.06-.124l-.07-.14-.038-.07-.04-.073c-.026-.05-.053-.1-.083-.153l-.094-.161-.049-.084a39.319 39.319 0 01-.053-.084l-.109-.174c-.078-.116-.156-.236-.243-.354l-.065-.089-.032-.044-.034-.044-.136-.176c-.046-.058-.093-.115-.14-.171l-.07-.085-.073-.082-.072-.082a2.469 2.469 0 00-.072-.08l-.144-.153c-.047-.05-.097-.098-.143-.145-.047-.047-.093-.093-.14-.136l-.134-.126-.129-.114-.12-.105-.11-.09-.096-.08-.084-.065a84.392 84.392 0 01-.093-.071.088.088 0 00-.121.014l-1.543 1.867a.088.088 0 00.006.119l.044.044.054.053.06.064.07.073.074.084c.026.03.054.058.08.09a387 387 0 00.083.1c.03.034.057.07.086.108.028.037.058.073.087.113l.087.119.043.061.042.063c.015.02.029.042.043.063.015.021.028.043.042.065l.082.13.078.132.02.033.018.034.036.067c.05.087.093.177.137.262l.06.128.028.062c.01.02.018.04.026.061l.05.117.044.111.02.052c.007.017.015.035.019.049l.028.082.025.072.028.084.025.075c.017.048.07.072.117.054l2.675-1.075zM8.228 6.24l.078.011.09.016.103.018c.031.005.064.013.098.02l.973-1.992-.143-.022-.095-.014-.093-.012-.179-.02-.167-.015c-.054-.004-.105-.01-.154-.012l-.14-.007-.121-.006-.104-.001-.111-.002a.088.088 0 00-.09.084L8.086 6.14a.088.088 0 00.076.092l.067.009zM10.845 7.261a50.21 50.21 0 01.14.101l.034.026.035.026.063.047c.041.03.099.02.127-.022l1.27-1.937a.088.088 0 00-.029-.124l-.068-.04-.038-.021-.045-.026-.117-.064-.133-.073-.14-.07c-.05-.024-.1-.05-.154-.075l-.166-.076c-.057-.027-.116-.051-.177-.077-.06-.025-.122-.052-.186-.076a38.102 38.102 0 00-.049-.018l-.548 2.38.087.057.094.062zM6.521 6.231l.073-.01.071-.007.137-.014.128-.009.06-.004.055-.003.098-.002.086-.003h.09l.08-.001c.05 0 .09-.043.087-.094L7.37 4.338a.088.088 0 00-.099-.082l-.078.01-.091.012-.127.018-.144.022-.074.013-.077.015-.162.031-.173.04-.09.02-.091.024-.188.05c-.063.02-.128.039-.193.058l-.098.03-.097.034-.099.034a2.193 2.193 0 00-.098.035l-.196.075c-.066.025-.13.054-.194.08l-.096.041-.094.044-.093.043c-.03.014-.061.028-.091.044l-.178.09c-.058.028-.114.06-.169.09-.055.03-.109.06-.16.09l-.149.089c-.048.028-.093.059-.137.086l-.125.08-.11.076-.098.067c-.03.02-.056.041-.08.059l-.085.062a.088.088 0 00-.02.12l.725 1.066c.026.038.076.05.116.028l.065-.037.072-.04.085-.044.097-.051.11-.052c.037-.018.076-.039.118-.056l.129-.057c.044-.02.09-.038.137-.056.047-.019.094-.04.143-.057l.15-.054c.025-.01.051-.017.077-.026l.078-.025.078-.025.08-.023c.053-.015.106-.031.16-.045l.16-.04.081-.018c.027-.005.054-.01.08-.017l.08-.016c.026-.006.052-.01.078-.014l.155-.027.15-.021zM1.578 7.61c-.02.026-.038.053-.057.08l-.058.082c-.02.027-.037.055-.056.083l-.11.169-.105.171-.026.043-.025.044-.05.086c-.067.114-.125.23-.184.34l-.08.166-.04.08-.036.08-.068.152-.06.144-.053.132a233.253 233.253 0 01-.085.227l-.031.091-.031.093a.088.088 0 00.052.11l.675.259a.088.088 0 00.11-.044l.036-.074.037-.077.047-.09.052-.101.062-.111.067-.12.076-.126.04-.066.042-.066c.03-.044.059-.09.088-.135.064-.09.126-.185.196-.276l.052-.07.026-.034.027-.034.108-.137.112-.133c.02-.022.037-.045.057-.066l.058-.064.057-.063c.018-.02.037-.042.057-.061l.115-.12c.037-.038.077-.074.114-.11.037-.037.073-.073.11-.106l.107-.097c.034-.031.07-.06.102-.088l.094-.08.083-.065.072-.058c.01-.009.025-.019.037-.028a34.663 34.663 0 01.097-.074.088.088 0 00.014-.127l-.768-.9a.088.088 0 00-.129-.007l-.056.055-.032.03-.035.035-.085.086-.097.098-.1.107c-.033.038-.07.076-.106.118l-.111.129c-.039.043-.076.09-.114.138-.038.048-.079.095-.117.146l-.116.154c-.02.026-.04.052-.058.08zM.182 10.765l-.016.077-.018.09c-.007.032-.013.072-.02.111l-.022.129-.012.07-.01.07c-.012.099-.028.204-.038.316l-.017.172c-.005.058-.008.118-.012.18-.01.121-.012.248-.016.376L0 12.404v.048a2824.837 2824.837 0 01.001.194v.049l.003.048.007.194.002.049.001.015v.012l.003.023.006.093.007.092.01.095.009.093.004.047.006.045.022.177c.01.057.018.113.026.168.008.055.018.108.028.159l.002.012a.088.088 0 00.087.072h.238c.05 0 .09-.043.088-.093l-.003-.041-.008-.153-.005-.161v-.168l-.001-.043v-.043l.003-.086.002-.087.004-.092.004-.093.001-.024v-.013l.001.003V12.986l.004-.045.015-.181.003-.045.006-.045.01-.09.01-.09.005-.044.007-.045c.018-.117.034-.233.056-.344l.031-.163.035-.155c.02-.1.047-.195.07-.282l.016-.063.017-.06.033-.108.029-.096.028-.086.025-.075a.088.088 0 00-.06-.113l-.597-.159a.088.088 0 00-.11.068z"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Path
        d="M6.93 13.855a1.372 1.372 0 001.94-.925l1.39-6.025.528-2.295.327-1.421c.038-.166-.093-.278-.225-.278a.216.216 0 00-.199.128l-.666 1.363-.983 2.011L6.3 12.02c-.333.68-.051 1.502.63 1.835zm.654-1.94a.673.673 0 110 1.345.673.673 0 010-1.345z"
        fill="#fff"
      />
    </Svg>
  );
};

export const Search = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#clip0_4701_2131)">
        <Path
          d="M17.258 16.075l-2.833-2.825a6.6 6.6 0 001.408-4.083 6.667 6.667 0 10-6.666 6.666 6.6 6.6 0 004.083-1.408l2.825 2.833a.833.833 0 001.183 0 .833.833 0 000-1.183zM4.167 9.167a5 5 0 1110 0 5 5 0 01-10 0z"
          fill="#ABABAB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4701_2131">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const RightArrow = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_3_7208)">
        <Path
          d="M10 19a1 1 0 01-.77-1.64L13.71 12 9.39 6.63a1 1 0 01.15-1.41 1 1 0 011.46.15l4.83 6a1 1 0 010 1.27l-5 6A1 1 0 0110 19z"
          fill="#D0B070"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_7208">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const Mail = (props: SvgProps) => {
  return (
    <Svg width={32} height={25} viewBox="0 0 32 25" fill="none" {...props}>
      <Path
        d="M18.674 16.355a4.807 4.807 0 01-5.348 0L.213 7.613A4.767 4.767 0 010 7.462v14.325a2.945 2.945 0 002.946 2.945h26.108A2.945 2.945 0 0032 21.787V7.462c-.07.052-.14.102-.214.151l-13.112 8.742z"
        fill="url(#paint0_linear_3_7214)"
      />
      <Path
        d="M1.253 6.053l13.113 8.742a2.942 2.942 0 003.268 0l13.113-8.742A2.807 2.807 0 0032 3.71 2.948 2.948 0 0029.055.766H2.945A2.949 2.949 0 000 3.712c0 .943.469 1.818 1.253 2.34z"
        fill="url(#paint1_linear_3_7214)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3_7214"
          x1={16}
          y1={7.46167}
          x2={31.8085}
          y2={30.5515}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3_7214"
          x1={16}
          y1={0.765626}
          x2={28.3343}
          y2={22.1859}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const Home = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path d="M6.5 3.042H18.51c-.067-.813-.56-1.256-1.47-1.256H7.961c-.901 0-1.404.443-1.461 1.256zm-1.934 2.67h15.877c-.132-.878-.588-1.377-1.593-1.377H6.16c-1.006 0-1.461.5-1.594 1.377zm1.12 16.61h13.629c1.973 0 3.006-.998 3.006-2.901v-9.303c0-1.903-1.033-2.9-3.006-2.9H5.685c-1.982 0-3.006.988-3.006 2.9v9.303c0 1.903 1.024 2.9 3.006 2.9z" />
    </Svg>
  );
};
export const Diagnose = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path d="M21.012 4.2c-.054.004-5.591.48-8.225-2a.41.41 0 00-.57 0c-2.634 2.48-8.167 2.004-8.225 2a.406.406 0 00-.317.108.408.408 0 00-.138.304v3.863c0 12.904 8.813 14.425 8.9 14.438.021.004.046.004.067.004.021 0 .042 0 .063-.005.087-.012 8.9-1.533 8.9-14.437V4.612a.415.415 0 00-.454-.412zm-4.058 9.358c0 .23-.187.417-.416.417H13.97v2.567c0 .229-.188.416-.417.416h-2.108a.418.418 0 01-.417-.416v-2.567H8.462a.418.418 0 01-.416-.417V11.45c0-.23.187-.417.416-.417h2.567V8.467c0-.23.188-.417.417-.417h2.108c.23 0 .417.187.417.417v2.566h2.567c.229 0 .416.188.416.417v2.108z" />
    </Svg>
  );
};

export const Garden = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <G clipPath="url(#clip0_4727_2158)">
        <G clipPath="url(#clip1_4727_2158)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.86 1.594l-.066-.08a.823.823 0 00-1.273.08L7.794 9.622l-.135.194c-2.488 3.715-1.361 8.779 2.514 11.082.993.59 2.084.942 3.195 1.059v2.223l.006.096a.821.821 0 001.637-.096v-2.223a7.856 7.856 0 003.195-1.06l.201-.123.197-.13c3.627-2.462 4.543-7.432 1.981-11.022L14.86 1.594zm9.802 17.063a.821.821 0 00-1.61-.33 3.427 3.427 0 01-.84 1.62 4.106 4.106 0 01-.643.576l-.132.092-.203.123a.819.819 0 00-.26 1.059c.212.4.71.553 1.11.34.36-.189.855-.546 1.348-1.091a5.049 5.049 0 001.23-2.39zM14.19 8.398a.821.821 0 00-.816.725l-.006.095v3.107l-1.247-1.273-.077-.07a.823.823 0 00-1.085.057.819.819 0 00-.08 1.081l.067.078 2.362 2.41.06.054v3.78l.006.095a.821.821 0 001.616.092l.016-.092.004-.08 2.773-2.976.066-.08a.819.819 0 00-.108-1.079.823.823 0 00-1.086-.029l-.075.071-1.569 1.683V9.218l-.005-.095a.821.821 0 00-.816-.725zm-7.682-.196a.819.819 0 00-.045-1.083.823.823 0 00-1.162-.025c-.315.301-.756.847-1.188 1.627a9.03 9.03 0 00-.836 2.087.822.822 0 001.59.416 7.395 7.395 0 01.684-1.71c.203-.366.42-.683.634-.949l.13-.156.193-.207z"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_4727_2158">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
        <ClipPath id="clip1_4727_2158">
          <Path fill="#fff" transform="translate(2)" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const Profile = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path d="M12.952 11.772c2.384 0 4.456-2.002 4.456-4.61a4.456 4.456 0 00-4.456-4.483c-2.384 0-4.456 1.95-4.456 4.505 0 2.586 2.06 4.588 4.456 4.588zm-7.475 9.657h14.94c1.191 0 1.904-.522 1.904-1.387 0-2.69-3.598-6.403-9.38-6.403-5.771 0-9.37 3.712-9.37 6.403 0 .865.714 1.387 1.906 1.387z" />
    </Svg>
  );
};