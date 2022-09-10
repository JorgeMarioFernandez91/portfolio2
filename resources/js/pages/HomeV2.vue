<template>
  <section>
    <div class="loading-page" v-if="loading">
      <!-- <div class="left"></div>
      <div class="center">Loading</div>
      <div class="right"></div> -->
      <svg
        width="273"
        height="273"
        viewBox="0 0 273 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="gear">
          <path
            d="M136.078 0L272.155 136.078L136.078 272.155L0 136.078L136.078 0Z"
            fill=""
            class="appear"
          />
          <path
            d="M135.916 20.3783L251.455 135.917L135.916 251.455L20.3782 135.917L135.916 20.3783Z"
            fill="#F1F4FF"
            class=""
          />
        </g>
        <g class="appear-text">
          <path
            d="M88.4963 110.792H96.0645L113.86 154.258H114.474L132.269 110.792H139.837V163.155H133.905V123.371H133.394L117.03 163.155H111.303L94.9395 123.371H94.4281V163.155H88.4963V110.792Z"
            fill="#"
          />
          <path
            d="M152.551 163.155V110.792H183.949V116.417H158.892V134.11H181.596V139.735H158.892V163.155H152.551Z"
            fill="#"
          />
        </g>
      </svg>
    </div>
    <div v-if="!loading" class="nav-bar" id="navbar" :class="switchedOn ? '' : 'dark-mode'">
      <div class="initials" @click="scrollToRef('home')">MF</div>
      <div class="button-container">
        <a class="button" @click="scrollToRef('about')">About</a>
        <a class="button" @click="scrollToRef('my-journey')">My Journey</a>
        <a class="button" @click="scrollToRef('projects')">Projects</a>
        <a class="button" @click="scrollToRef('contact')">Contact</a>
        <a class="button resume" @click="openResume()"><div class="text">Resume</div></a>
      </div>
    </div>
    <div v-if="!loading" class="main" :class="switchedOn ? '' : 'dark-mode'">
      <div class="section-1" ref="home">
        <div class="intro-container">
          <div class="intro">
            <div class="left">
              <div class="immediate-reveal">Hi, I'm</div>
              <div class="name immediate-reveal">Mario Fernandez</div>
              <div class="immediate-reveal">I build things for the web</div>
              <div class="immediate-reveal">
                Full-Stack Web Developer, who occasionally dabbles in UI/UX design, with a passion
                for creating interactive applications that solve real world problems
              </div>
            </div>
            <div class="right">
              <div class="logo immediate-reveal">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 440 542"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M254.661 61.4249L241.914 62.457L191.784 62.3247C164.227 62.2453 136.383 62.113 129.909 62.0336C122.318 61.9277 117.906 61.9807 117.419 62.1395C116.503 62.4835 61.8463 123.988 61.5026 125.099C61.3594 125.496 61.2161 126.184 61.1875 126.634C61.1302 127.058 62.6771 136.241 64.625 147.012L68.1771 166.596L61.9896 175.171C56.5755 182.687 55.8021 183.904 55.5729 185.148C55.4297 185.942 55.3724 186.736 55.4297 186.921C55.487 187.106 58.9245 209.205 63.0208 236.066C67.1172 262.928 70.5547 285.212 70.6406 285.609C70.7265 286.032 70.9844 286.35 71.2135 286.35C71.4427 286.35 71.6146 286.588 71.6146 286.879C71.6146 287.196 71.8151 287.408 72.1302 287.435C72.388 287.435 73.3047 287.541 74.1354 287.646C75.1667 287.779 75.7109 287.752 75.7969 287.567C75.8542 287.408 78.8047 267.083 82.3281 242.418L88.7448 197.56L105.961 163.553C115.414 144.842 123.206 129.44 123.263 129.334C123.349 129.096 224.039 119.092 226.159 119.092C227.219 119.092 316.393 137.114 316.68 137.405C316.909 137.617 345.268 210.501 345.326 211.031C345.354 211.295 345.555 211.666 345.784 211.825C346.099 212.036 354.435 221.696 357.271 225.11C357.414 225.295 356.841 240.645 355.924 260.758C355.065 280.21 354.349 296.327 354.349 296.592C354.349 297.015 354.721 297.147 356.383 297.412C357.529 297.597 358.474 297.703 358.531 297.677C358.56 297.624 364.776 274.97 372.339 247.314C384.255 203.673 386.003 196.978 385.63 196.713C385.401 196.528 385.057 196.157 384.885 195.893C384.714 195.602 384.37 195.099 384.112 194.755C383.826 194.411 380.188 183.931 375.977 171.492C371.766 159.054 368.156 148.679 367.956 148.468C367.612 148.124 367.669 144.048 368.242 121.871C368.615 107.447 368.987 93.7914 369.073 91.489C369.159 89.213 369.13 87.334 368.987 87.334C368.872 87.334 368.128 86.8047 367.354 86.1695C366.581 85.5079 359.19 79.4474 350.911 72.6725L335.872 60.3663H332.292L328.682 60.3398L326.992 65.3681C326.076 68.1205 325.245 70.5023 325.13 70.6347C325.044 70.7934 318.083 68.5439 309.576 65.6328L294.164 60.3663L280.786 60.3928C267.753 60.3928 267.094 60.4192 254.661 61.4249ZM307.599 69.1791L325.56 75.2925L327.049 74.6308C328.367 74.0486 328.625 73.8104 328.969 72.7783C329.198 72.1167 330.057 69.6555 330.859 67.2736C332.206 63.3568 332.378 63.0128 332.836 63.3039C333.094 63.4892 340.37 69.4173 348.992 76.4569L364.661 89.2659V92.3358C364.661 94.0296 364.346 107.5 363.945 122.268C363.544 137.035 363.286 149.421 363.372 149.791C363.487 150.162 363.859 150.744 364.203 151.114C364.661 151.591 367.01 158.207 372.51 174.536C376.75 187.054 380.388 197.692 380.589 198.195C380.961 199.042 380.531 200.789 370.333 238.21C364.49 259.726 359.648 277.299 359.591 277.246C359.534 277.219 360.049 265.204 360.68 250.543C361.711 227.756 361.826 223.866 361.482 223.549C361.253 223.363 358.445 220.108 355.266 216.324L349.422 209.469L334.841 172.021C324.557 145.663 320.089 134.441 319.659 134.177C318.799 133.542 227.964 115.043 226.016 115.069C225.156 115.096 201.122 117.425 172.62 120.256C136.24 123.882 120.685 125.523 120.456 125.761C120.255 125.946 112.091 141.931 102.323 161.303L84.5338 196.501L79.0052 235.193C75.9687 256.497 73.4193 273.911 73.3333 273.911C73.2474 273.911 70.125 254.062 66.401 229.768L59.612 185.651L66.0573 176.706C71.0989 169.666 72.4739 167.575 72.4739 166.914C72.4739 166.437 70.8698 157.201 68.8932 146.351C66.9453 135.526 65.4271 126.528 65.5703 126.37C68.2344 123.114 118.995 66.1621 119.367 66.0562C120.026 65.7916 129.68 65.8445 146.237 66.1621C153.484 66.2944 178.12 66.4003 200.951 66.4003H242.487L265.547 64.6007C278.237 63.6215 288.836 62.8805 289.122 62.9334C289.409 63.0128 297.716 65.8181 307.599 69.1791Z"
                    fill=""
                  />
                  <path
                    d="M249.792 195.999C249.734 196.607 247.471 207.326 247.357 207.484C247.128 207.802 247.729 209.125 248.417 209.787C248.846 210.21 249.362 210.396 250.107 210.396C250.68 210.396 261.766 211.533 274.714 212.91L298.26 215.45L312.497 223.204C320.318 227.465 327.307 231.276 328.023 231.647L329.341 232.361L331.117 230.853L332.922 229.318L320.003 215.556C312.898 207.987 306.654 201.45 306.109 201.053L305.164 200.312L280.271 198.063C263.685 196.581 254.432 195.866 252.599 195.893C251.052 195.946 249.792 195.972 249.792 195.999ZM278.867 201.953C292.273 203.144 303.388 204.256 303.617 204.414C303.932 204.626 319.372 221.008 321.091 222.94C321.349 223.231 321.435 223.39 321.263 223.31C321.12 223.231 316.135 220.558 310.234 217.356L299.492 211.533L276.003 209.072C263.083 207.723 252.427 206.532 252.284 206.426C251.997 206.188 253.229 200.259 253.63 200.021C253.802 199.915 254.089 199.81 254.232 199.81C254.404 199.81 265.49 200.762 278.867 201.953Z"
                    fill=""
                  />
                  <path
                    d="M147.956 201.45C130.625 202.006 116.073 202.535 115.586 202.615C114.784 202.721 114.068 203.726 106.792 214.868C102.409 221.537 98.8281 227.121 98.8281 227.28C98.8281 227.439 99.2005 227.783 99.6875 228.048C100.174 228.286 100.547 228.577 100.547 228.656C100.547 228.736 100.805 229.08 101.091 229.424L101.635 230.085L109.799 225.401L117.992 220.717L141.711 219.658C154.745 219.076 166.318 218.6 167.435 218.6C169.182 218.6 169.497 218.52 170.013 217.964C170.328 217.62 174.195 214.312 178.607 210.66C183.018 206.982 186.914 203.541 187.258 202.985C188.575 200.948 187.458 200.312 182.474 200.365C180.812 200.392 165.286 200.868 147.956 201.45ZM178.607 205.341C178.12 205.764 175.456 208.014 172.648 210.369C167.979 214.233 167.435 214.63 166.49 214.63C165.888 214.63 154.487 215.106 141.081 215.715L116.732 216.774L111.948 219.526C109.284 221.034 107.135 222.225 107.135 222.172C107.135 221.855 117.305 206.638 117.562 206.532C117.992 206.399 170.414 204.653 175.456 204.6L179.466 204.573L178.607 205.341Z"
                    fill=""
                  />
                  <path
                    d="M133.518 241.915C126.07 244.218 119.883 246.15 119.826 246.229C119.596 246.441 121 250.093 121.286 250.093C121.458 250.093 127.617 248.24 134.979 245.964L148.357 241.862L163.911 243.953C172.477 245.091 179.495 246.017 179.552 245.964C179.753 245.832 180.268 242.153 180.125 241.995C180.01 241.915 173.393 240.962 165.372 239.877C157.38 238.819 150.362 237.866 149.789 237.787L148.299 237.59L148.529 239.163L148.299 240.698L149 238C148.714 237.206 147.211 237.813 147.182 237.787C147.125 237.76 140.995 239.613 133.518 241.915Z"
                    fill=""
                  />
                  <path
                    d="M274.484 242.947C266.865 244.085 260.562 245.064 260.505 245.117C260.448 245.17 260.562 246.123 260.763 247.208C261.135 249.167 261.135 249.167 261.966 249.061C262.453 249.034 268.727 248.108 275.945 247.049L289.065 245.091L299.549 249.431C305.307 251.839 310.12 253.718 310.234 253.666C310.521 253.507 312.068 250.119 311.924 249.987C311.695 249.775 290.411 241.068 290.326 241.148C290.297 241.201 288.729 240.577 288.5 241L289.409 242.762L289.208 241.809C289.094 241.254 288.865 240.83 288.664 240.857C288.464 240.883 282.076 241.809 274.484 242.947Z"
                    fill=""
                  />
                  <path
                    d="M73.7916 320.463C72.9036 321.019 72.1588 321.574 72.1875 321.68C72.2161 321.786 72.0729 321.971 71.901 322.077C71.414 322.342 77.1719 408.511 77.7448 409.755C78.0599 410.443 97.539 430.609 145.148 479.464C147.727 482.137 149.932 484.28 150.047 484.254C150.161 484.201 150.562 484.386 150.964 484.598C151.565 484.968 155.003 485.101 175.312 485.603C188.318 485.921 208.112 486.424 219.341 486.715C236.128 487.138 239.852 487.191 240.568 486.9C241.055 486.715 267.008 467.078 298.232 443.286C329.484 419.494 355.323 399.831 355.638 399.566C356.182 399.169 356.182 399.116 355.695 398.64C355.008 397.925 355.065 397.767 356.068 397.767H356.927V367.332V336.897H355.781C354.893 336.897 354.549 336.765 354.177 336.236C353.919 335.865 353.604 335.574 353.49 335.574C353.375 335.574 339.682 345.975 323.096 358.705C296.427 379.109 292.875 381.755 292.703 381.253C292.589 380.961 292.359 380.194 292.187 379.612L291.901 378.5L287.661 379.532C285.341 380.088 283.221 380.564 282.935 380.564C282.648 380.564 268.583 371.99 251.654 361.51C234.724 351.03 220.745 342.455 220.544 342.455C220.344 342.455 214.901 344.069 208.456 346.054L196.768 349.654L186.255 344.122C180.469 341.079 175.427 338.459 175.026 338.274C174.396 337.983 170.529 338.565 144.948 342.852C128.792 345.525 114.469 347.96 113.094 348.224L110.63 348.727L108.625 347.298L106.591 345.896L105.302 347.457L103.984 349.018L105.789 350.342C107.451 351.533 126.815 365.294 131.656 368.708C133.26 369.846 134.062 370.243 134.721 370.243C135.237 370.243 148.586 369.767 164.37 369.185L193.13 368.152L206.193 372.202C213.411 374.451 228.479 379.135 239.708 382.655C250.909 386.149 260.104 388.954 260.104 388.874C260.104 388.822 260.591 388.98 261.221 389.271L262.31 389.801L267.724 388.477C270.703 387.763 275.602 386.572 278.581 385.857C281.589 385.143 285.685 384.137 287.747 383.634C289.781 383.132 291.5 382.735 291.529 382.761C291.615 382.867 222.807 435.479 222.32 435.691C221.69 435.955 148.987 424.39 148.529 423.914C148.328 423.729 131.885 400.228 112.005 371.699C92.0963 343.17 75.7396 319.748 75.6536 319.642C75.539 319.537 74.7083 319.907 73.7916 320.463ZM111.003 377.653C129.88 404.647 145.521 426.931 145.779 427.169C146.781 428.042 143.945 427.566 194.935 435.611C215.503 438.84 221.117 439.634 223.008 439.555C224.182 439.475 224.612 439.264 227.104 437.332C229.883 435.188 351.599 342.085 352.286 341.582C352.544 341.397 352.63 346.928 352.602 369.079V396.84L304.047 433.759C277.32 454.057 251.768 473.509 247.185 476.949L238.906 483.222L234.695 483.089C232.346 483.01 223.294 482.798 214.557 482.586C205.82 482.348 192.214 482.004 184.336 481.793C176.458 481.607 166.289 481.343 161.706 481.237C157.151 481.131 153.141 480.972 152.797 480.893C152.482 480.813 151.021 479.49 149.531 477.955C148.07 476.42 145.664 473.985 144.203 472.53C142.742 471.074 128.018 455.963 111.461 438.919L81.3541 407.956V406.156C81.3541 404.409 76.6849 333.245 76.3411 329.752C76.2265 328.614 76.2552 328.111 76.4557 328.296C76.5989 328.429 92.1536 350.659 111.003 377.653ZM184.737 347.88C191.211 351.294 195.852 353.57 196.367 353.623C196.854 353.65 202.268 352.115 208.599 350.156L219.971 346.663L248.474 364.315C264.172 374.028 276.948 382.02 276.891 382.073C276.833 382.126 273.654 382.946 269.872 383.873C263.227 385.487 262.883 385.54 261.594 385.222C260.849 385.037 245.552 380.3 227.591 374.689C209.63 369.079 194.477 364.421 193.932 364.342C193.388 364.236 180.326 364.633 164.914 365.188C137.443 366.194 136.841 366.194 135.437 365.718C134.664 365.453 133.862 365.135 133.69 365.003C133.49 364.871 129.25 361.88 124.237 358.36C119.253 354.814 115.214 351.85 115.299 351.718C115.357 351.612 115.93 351.506 116.503 351.48C117.104 351.48 129.909 349.389 144.948 346.848C159.987 344.308 172.677 342.217 173.135 342.217C173.708 342.19 177.174 343.884 184.737 347.88Z"
                    fill=""
                  />
                  <path
                    d="M163.74 397.555C163.31 400.731 163.31 400.837 164.398 402.636C165.143 403.88 167.865 406.818 174.224 413.169C184.622 423.57 186.055 424.867 186.628 424.655C187.458 424.364 219.714 405.388 219.714 405.203C219.714 405.097 219.513 404.78 219.284 404.489C219.055 404.224 218.854 403.483 218.854 402.874C218.854 401.922 218.74 401.736 218.224 401.63C217.622 401.498 164.542 396.417 164.083 396.443C163.969 396.443 163.826 396.946 163.74 397.555ZM190.638 402.954C202.297 404.039 211.922 404.965 212.036 404.992C212.151 405.018 210.805 405.891 209.029 406.923C207.281 407.956 201.523 411.317 196.31 414.387L186.771 419.971L177.719 410.84C172.734 405.838 168.552 401.736 168.409 401.736C168.266 401.736 168.036 401.498 167.865 401.234C167.607 400.757 167.664 400.731 168.495 400.837C169.01 400.889 178.979 401.842 190.638 402.954Z"
                    fill=""
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="switch-container">
          <div
            class="switch immediate-reveal"
            :class="switchedOn ? 'light' : 'dark'"
            @click="toggleTheme()"
          ></div>
        </div>
      </div>
      <div class="section-2" ref="about">
        <div class="header reveal">About Me</div>
        <div class="content-container reveal">
          <div class="left">
            Hello! My name is Mario Fernandez and I enjoy creating things that live on the internet.
            After I graduated from my CS program I began to teach myself all things web related and
            I fell in love with the immediate visual feedback that web development provides.
            <br />
            <br />
            As a full stack web developer I have comprehensive knowledge of the back end side of
            development, but the front end is what brings me joy. The ability to make beautiful
            pages, interfaces, widgets, and interaction really appeals to my creative side.
            <br />
            <br />
            I have several years of industry experience working with a Canadian based company.
            Everyday I’m learning something new and that’s what’s so attractive about this industry.
            I plan to continue growing my skills as I take on bigger and more exciting projects!
          </div>
          <div class="right">
            <div class="skills-container">
              <div class="skill-container">
                <div class="label">Vue.js <span>90%</span></div>
                <div id="barBackground">
                  <div id="vue" class="bar"></div>
                </div>
              </div>
              <div class="skill-container">
                <div class="label">PHP <span>80%</span></div>
                <div id="barBackground">
                  <div id="php" class="bar"></div>
                </div>
              </div>
              <div class="skill-container">
                <div class="label">MySQL <span>75%</span></div>
                <div id="barBackground">
                  <div id="mysql" class="bar"></div>
                </div>
              </div>
              <div class="skill-container">
                <div class="label">HTML <span>90%</span></div>
                <div id="barBackground">
                  <div id="html" class="bar"></div>
                </div>
              </div>
              <div class="skill-container">
                <div class="label">CSS/SCSS <span>85%</span></div>
                <div id="barBackground">
                  <div id="cssScss" class="bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-3" ref="my-journey">
        <div class="header reveal">My Journey</div>
        <div class="content-container">
          <div class="top reveal">
            <div class="list">
              <div class="label">Where I've Worked</div>
              <ul>
                <li
                  @click="selectListOneItem('RS')"
                  :class="listOneItemSelected('RS') ? 'active' : ''"
                >
                  RentSync
                </li>
                <li
                  @click="selectListOneItem('FD')"
                  :class="listOneItemSelected('FD') ? 'active' : ''"
                >
                  Freelance Developer
                </li>
                <li
                  @click="selectListOneItem('UR')"
                  :class="listOneItemSelected('UR') ? 'active' : ''"
                >
                  University Researcher
                </li>
              </ul>
            </div>
            <div class="content">
              <span v-if="getActiveListOneContent().title !== ''" class="title">
                {{ getActiveListOneContent().title }}
              </span>
              <span v-if="getActiveListOneContent().company !== ''" class="highlight">
                {{ getActiveListOneContent().company }}
              </span>
              <div v-if="getActiveListOneContent().date !== ''" class="date">
                {{ getActiveListOneContent().date }}
              </div>
              <li v-if="getActiveListOneContent().first !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListOneContent().first"></div>
              </li>
              <li v-if="getActiveListOneContent().second !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListOneContent().second"></div>
              </li>
              <li v-if="getActiveListOneContent().third !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListOneContent().third"></div>
              </li>
            </div>
          </div>
          <div class="bottom reveal">
            <div class="list">
              <div class="label">Projects I've Worked On</div>
              <ul>
                <li
                  @click="selectListTwoItem('UIUX')"
                  :class="listTwoItemSelected('UIUX') ? 'active' : ''"
                >
                  UI/UX Essentials Course
                </li>
                <li
                  @click="selectListTwoItem('PW')"
                  :class="listTwoItemSelected('PW') ? 'active' : ''"
                >
                  Portfolio Website
                </li>
                <li
                  @click="selectListTwoItem('CCS')"
                  :class="listTwoItemSelected('CCS') ? 'active' : ''"
                >
                  Cookie Clicker Startup
                </li>
              </ul>
            </div>
            <div class="content">
              <span v-if="getActiveListTwoContent().title !== ''" class="title">
                {{ getActiveListTwoContent().title }}
              </span>
              <span v-if="getActiveListTwoContent().company !== ''" class="highlight">
                {{ getActiveListTwoContent().company }}
              </span>
              <div v-if="getActiveListTwoContent().date !== ''" class="date">
                {{ getActiveListTwoContent().date }}
              </div>
              <li v-if="getActiveListTwoContent().first !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListTwoContent().first"></div>
              </li>
              <li v-if="getActiveListTwoContent().second !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListTwoContent().second"></div>
              </li>
              <li v-if="getActiveListTwoContent().third !== ''">
                <div class="arrow">
                  <svg
                    width="100%"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.536 21.886C5.69776 21.9702 5.87939 22.0087 6.06138 21.9974C6.24337 21.9861 6.41886 21.9255 6.569 21.822L19.569 12.822C19.7018 12.73 19.8104 12.6071 19.8854 12.464C19.9603 12.3208 19.9995 12.1616 19.9995 12C19.9995 11.8384 19.9603 11.6792 19.8854 11.5361C19.8104 11.3929 19.7018 11.2701 19.569 11.178L6.569 2.17803C6.41914 2.07348 6.24345 2.01209 6.06109 2.00053C5.87874 1.98898 5.69671 2.02771 5.53485 2.11251C5.37299 2.19731 5.23752 2.32491 5.14321 2.48141C5.0489 2.63791 4.99936 2.8173 5 3.00003V21C4.99997 21.1826 5.0499 21.3616 5.14439 21.5178C5.23887 21.674 5.3743 21.8013 5.536 21.886ZM7 4.90903L17.243 12L7 19.091V4.90903Z"
                      fill=""
                    />
                  </svg>
                </div>
                <div class="text" v-html="getActiveListTwoContent().third"></div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="section-4" ref="projects">
        <div class="header reveal">Some Things I've Built</div>
        <div class="content-container">
          <div class="content reveal">
            <div class="info">
              <div class="featured-text">Featured Project</div>
              <div class="title">Coffee Company</div>
              <div class="info-box">
                The perfect website for small to medium sized, privately owned businesses, to
                showcase their products and services. Can be expanded to include ecommerce
                capabilites.
              </div>
              <div class="tech-container">#coffee, #smallbusiness, #ecommerce</div>
              <div class="link-container"></div>
            </div>
            <div class="image-container">
              <div class="image coffee" @click="toSite('coffee-site')"></div>
            </div>
          </div>
          <div class="content reveal">
            <div class="image-container inverse">
              <div class="image black-white" @click="toSite('black-white-site')"></div>
            </div>
            <div class="info inverse">
              <div class="featured-text inverse">Featured Project</div>
              <div class="title inverse">Black & White</div>
              <div class="info-box inverse">
                An artistic style website suitable for those who work with aestheics. This site
                draws the user in so they can enjoy the various projects on display.
              </div>
              <div class="tech-container inverse">#artsy, #monochrome, #cleanandsimple</div>
              <div class="link-container inverse"></div>
            </div>
          </div>
          <div class="content reveal">
            <div class="info">
              <div class="featured-text">Featured Project</div>
              <div class="title">Business Finder</div>
              <div class="info-box">
                A site dedicated to looking up local businesses. A clean interface with star ratings
                makes this site a standout for companies that want to advertise locally.
              </div>
              <div class="tech-container">#localbusinesses, #search, #advertise</div>
              <div class="link-container"></div>
            </div>
            <div class="image-container">
              <div class="image finder" @click="toSite('business-finder-site')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-5" ref="contact">
        <div class="header reveal">Get In Touch</div>
        <div class="contact reveal" ref="contact">
          <div class="contact-container">
            <b-form @submit="onSubmit">
              <b-form-group id="group-contact">
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="your name"
                  :state="isNameStateValid(form.name)"
                  required
                ></b-form-input>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="youremail@email.com"
                  :state="isEmailStateValid(form.email)"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="group-message">
                <b-form-input
                  id="subject"
                  v-model="form.subject"
                  placeholder="subject"
                  :state="isSubjectStateValid(form.subject)"
                  required
                ></b-form-input>
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  placeholder="your message"
                  :state="isMessageStateValid(form.message)"
                  rows="8"
                  max-rows="8"
                  required
                ></b-form-textarea>
              </b-form-group>
              <div class="success-text" v-if="messageSent">
                Thanks for reaching out, I'll get back to you as soon as I can!
              </div>
              <div v-else class="button-container">
                <b-button class="submit" @click="onSubmit()">Submit</b-button>
              </div>
            </b-form>
          </div>
        </div>
        <div class="footer">Jorge Mario Fernandez @2022</div>
      </div>

      <div class="media-links">
        <div class="left">
          <div class="github" @click="openGitHub()">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1208 18.5811L17.23 18.7248L17.6777 19.5083C18.0532 20.1655 18.1641 20.9467 18.1641 21.8144V26.4769C18.1641 26.6365 18.1178 26.7043 18.0991 26.7248C18.0837 26.7417 18.057 26.7619 17.9928 26.7619V26.7619L17.9841 26.762C17.9476 26.7625 17.9115 26.7557 17.8777 26.742C17.844 26.7283 17.8133 26.708 17.7876 26.6822C17.7618 26.6564 17.7415 26.6258 17.7278 26.592C17.7141 26.5583 17.7073 26.5221 17.7078 26.4857H17.7078V26.4769V21.8517C17.7719 21.2927 17.7092 20.7263 17.5243 20.1945C17.3811 19.7829 17.1676 19.4004 16.8942 19.0637L17.1922 18.2889C18.8672 18.0488 20.6505 17.6116 22.0436 16.468C23.5768 15.2093 24.5328 13.1883 24.5328 9.98567C24.5328 8.38936 23.9359 6.92255 22.8847 5.70522L22.7414 5.13289C23.1583 3.95977 23.1784 2.67994 22.7952 1.49138L22.6245 0.961925L22.0788 1.0701C21.4557 1.19363 20.2679 1.4437 18.3209 2.79582L17.9052 2.86422C15.1989 2.19898 12.3718 2.19898 9.6655 2.86422L9.22915 2.79243C7.23643 1.58481 5.99967 1.17192 5.25533 1.17192H4.79031L4.65669 1.61733C4.30415 2.79246 4.27182 4.11209 4.71176 5.25761L4.57589 5.80332C3.40442 7.03905 2.81033 8.61806 2.81033 10.0994C2.81033 13.236 3.70362 15.2561 5.20602 16.5323C6.57185 17.6925 8.35221 18.1567 10.1212 18.4013L10.3534 19.156C9.72801 19.9146 9.40982 20.8728 9.52033 21.8514V26.5907L9.52027 26.5907L9.52039 26.5994C9.5209 26.6359 9.51411 26.672 9.5004 26.7058C9.4867 26.7395 9.46637 26.7702 9.44061 26.7959C9.41485 26.8217 9.38419 26.842 9.35043 26.8557C9.31668 26.8694 9.28052 26.8762 9.2441 26.8757L9.23533 26.8756L9.22656 26.8757C9.19014 26.8762 9.15398 26.8694 9.12023 26.8557C9.08648 26.842 9.05581 26.8217 9.03006 26.7959C9.0043 26.7702 8.98396 26.7395 8.97026 26.7058C8.95656 26.672 8.94976 26.6359 8.95027 26.5994H8.95033V26.5907V23.9757V23.2041L8.1956 23.3643C6.44924 23.7348 5.30297 23.4607 4.47376 22.9801C3.61491 22.4823 3.0295 21.7297 2.45182 20.9794L2.44445 20.9698L2.43672 20.9606C2.41404 20.9333 2.39129 20.906 2.36847 20.8785C2.11608 20.5751 1.85517 20.2614 1.58947 20.0105C1.35195 19.7862 1.07024 19.5716 0.730992 19.4506C0.711581 19.4196 0.692514 19.3854 0.675905 19.3495C0.622094 19.2331 0.620272 19.1591 0.62917 19.1235C0.649449 19.0424 0.698767 18.9858 0.734254 18.964C0.743733 18.9582 0.749539 18.9564 0.751707 18.9558C0.754237 18.9563 0.759753 18.9579 0.768936 18.9625L0.843527 18.9997L0.925259 19.016C1.74223 19.1794 2.26003 19.7881 2.92075 20.5647C2.96643 20.6184 3.01278 20.6729 3.05997 20.7281C3.56315 21.3979 4.14931 22.1578 5.05272 22.626C5.98834 23.111 7.17158 23.2426 8.80198 22.8808L9.29158 22.7722V22.2707V21.8157V21.7772L9.28686 21.739C9.19337 20.9828 9.37925 20.2073 9.77798 19.5095L10.2082 18.7566L9.3579 18.5866C7.70686 18.2563 5.99332 17.6364 4.69458 16.3764C3.41407 15.1342 2.46783 13.2025 2.46783 10.1007C2.46783 8.42301 2.98777 6.97302 4.02922 5.72328L4.22398 5.48957L4.16019 5.19211C3.8541 3.76481 3.94602 2.25462 4.40938 1.04582L4.76183 0.763858C4.79552 0.756978 4.85168 0.747737 4.93383 0.742085C5.10882 0.730046 5.37915 0.73626 5.75194 0.805719C6.49776 0.944683 7.64754 1.33582 9.24569 2.32792L9.47048 2.46746L9.72714 2.4032C12.3529 1.74575 15.1003 1.74575 17.726 2.4032L17.9973 2.47112L18.2287 2.31415C19.7671 1.27063 20.9137 0.854412 21.67 0.703045C22.0485 0.627296 22.329 0.617868 22.5131 0.628741C22.6018 0.633984 22.6618 0.643438 22.6969 0.650296L23.0352 0.92096C23.5159 2.35149 23.592 3.75527 23.1932 5.15009L23.7941 5.32192L23.3139 5.72203C24.3552 6.97154 24.8741 8.42144 24.8741 10.0994C24.8741 13.2731 23.9755 15.2316 22.7401 16.4672C21.4911 17.7163 19.8178 18.3074 18.1208 18.5811ZM0.750044 18.9557C0.750018 18.9556 0.750416 18.9556 0.751281 18.9558C0.750495 18.9558 0.75007 18.9557 0.750044 18.9557Z"
                fill="black"
                stroke="#"
                stroke-width=""
              />
            </svg>
          </div>
          <div class="linkedin" @click="openLinkedin()">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 8.5C20.4891 8.5 22.3968 9.29018 23.8033 10.6967C25.2098 12.1032 26 14.0109 26 16V24.75H21V16C21 15.337 20.7366 14.7011 20.2678 14.2322C19.7989 13.7634 19.163 13.5 18.5 13.5C17.837 13.5 17.2011 13.7634 16.7322 14.2322C16.2634 14.7011 16 15.337 16 16V24.75H11V16C11 14.0109 11.7902 12.1032 13.1967 10.6967C14.6032 9.29018 16.5109 8.5 18.5 8.5V8.5ZM1 9.75H6V24.75H1V9.75Z"
                stroke=""
                stroke-width=""
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 6C4.88071 6 6 4.88071 6 3.5C6 2.11929 4.88071 1 3.5 1C2.11929 1 1 2.11929 1 3.5C1 4.88071 2.11929 6 3.5 6Z"
                stroke=""
                stroke-width=""
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="email">jmferna91@gmail.com</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
  BFormTextarea,
  BModal,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import API from "../../../routes/api/api";
import pdf from "vue-pdf";
export default {
  name: "HomeV2",

  components: {
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormTextarea,
    BModal,
    API,
    BDropdown,
    BDropdownItem,
    pdf,
  },
  data() {
    return {
      checked: false,
      titles: {
        fullStack: "Full Stack Developer",
        web: "Web Developer",
        passion: "Loves to Travel",
      },
      counter: 1,
      currentTitle: "Full Stack Developer",
      isVueBarFilled: false,
      isPhpBarFilled: false,
      isMySqlBarFilled: false,
      isHtmlBarFilled: false,
      iscssScssBarFilled: false,
      resetProgressBars: false,
      canReset: true,
      popOut: false,
      nameState: null,
      emailState: null,
      subjectState: null,
      messageState: null,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      switchedOn: true,
      listOneItems: {
        RS: {
          state: true,
          content: {
            title: "Full Stack Developer",
            company: "@Rentsync",
            date: "Oct 2020 - Present",
            first:
              "Planned/developed support portal to streamline ticket resolution and reduce escalations by promoting greater support team autonomy",
            second:
              "Collaborated  in rebuilding outdated rentboard.ca website from scratch using <span class='highlight'>Vue.js, Laravel, PHP and MySQL</span>",
            third:
              "Created accessible, responsive, and functional UI/UX  for a seamless experience regardless of device",
          },
        },
        FD: {
          state: false,
          content: {
            title: "Full Stack Developer",
            company: "@La Camila Coffee Co",
            date: "Jan 2020 - Mar 202",
            first:
              "Built a unified style for the website using <span class='highlight'>HTML, CSS, Bootstrap, JavaScript, and jQuery</span>",
            second: "Implemented server-side logic with <span class='highlight'>PHP</span>",
            third:
              "Created a <span class='highlight'>MySQL</span> database to store products and their information",
          },
        },
        UR: {
          state: false,
          content: {
            title: "Back End/Cloud Developer",
            company: "@Western University",
            date: "Jun 2018 - Aug 2019",
            first:
              "Developed automation of service deployment using <span class='highlight'>Docker and Kubernetes Java APIs</span>",
            second:
              "Attended letious conferences to stay up to date with current research and best practices",
            third:
              "Collaborated with PhD students, professors, and industry professionals to solve automation issues in the cloud",
          },
        },
      },
      listTwoItems: {
        UIUX: {
          state: true,
          content: {
            title: "UI/UX Designer",
            company: "@Web Portfolio",
            date: "Aug 2022",
            first:
              "Learned about wireframes and the <span class='highlight'>Figma framework</span>",
            second: "Designed an ecommerce mobile website",
            third: "Awarded certificate of completion by Udemy",
          },
        },
        PW: {
          state: false,
          content: {
            title: "Front End Developer",
            company: "@Portfolio",
            date: "Aug 2022",
            first: "Designed UI/UX of portfolio website using <span class='highlight'>Figma</span>",
            second:
              "Developed the website using <span class='highlight'>Vue.js, Laravel, HTML/CSS, and PHP</span>",
            third:
              "The portfolio itself is meant as a way to showcase my skills, but it also contains a few interactive projects that give a sneek peak into some of my most recent aesthetic interests",
          },
        },
        CCS: {
          state: false,
          content: {
            title: "Front End Developer",
            company: "@Cookie Clicker Startup",
            date: "Jun 2018 - Aug 2019",
            first:
              "Implemented <span class='highlight'>React's</span> state hooks to maintain clean and dynamic code",
            second:
              "Designed the UI/UX from scratch using <span class='highlight'>HTML/CSS, and JavaScript</span>",
            third: "Planned and developed the entire project from wireframe to implementation",
          },
        },
      },
      messageSent: false,
      loading: true,
    };
  },

  computed: {},

  mounted() {
    setTimeout(() => (this.loading = false), 3000);
    // window.addEventListener("scroll", this.handleNav);
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.scrollHandler);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      }
      setTimeout(() => {
        document.getElementById("navbar").style.top = "-80px";
      }, 2200);

      prevScrollpos = currentScrollPos;
    };
  },
  beforeDestroy() {
    // window.removeEventListener("scroll", this.handleNav);
    window.removeEventListener("scroll", this.reveal);
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    isNameStateValid(name) {
      if (name === "") {
        return null;
      } else if (name.length > 3) {
        return true;
      }
      return false;
    },
    isEmailStateValid(email) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email === "") {
        return null;
      } else if (email.match(mailformat)) {
        return true;
      }
      return false;
    },
    isSubjectStateValid(subject) {
      if (subject === "") {
        return null;
      } else if (subject.length > 5) {
        return true;
      }
      return false;
    },
    isMessageStateValid(message) {
      if (message === "") {
        return null;
      } else if (message.length > 5) {
        return true;
      }
      return false;
    },
    openGitHub() {
      window.open("https://github.com/JorgeMarioFernandez91");
    },
    openLinkedin() {
      window.open("https://www.linkedin.com/in/jorge-mario-fernandez-67578b106/");
    },
    handleNav() {
      // let currentScrollPos = window.pageYOffset;
      // if (prevScrollpos > currentScrollPos) {
      //   document.getElementById("navbar").style.top = "0";
      // } else {
      //   document.getElementById("navbar").style.top = "-80px";
      // }
      // setTimeout(() => {
      //   document.getElementById("navbar").style.top = "-80px";
      // }, 3000);
      // prevScrollpos = currentScrollPos;
    },
    openResume() {
      this.$router.push({
        path: "/resume",
      });
    },
    reveal() {
      let reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    toggleTheme() {
      this.switchedOn = !this.switchedOn;
    },
    selectListOneItem(item) {
      for (let listItem in this.listOneItems) {
        this.listOneItems[listItem].state = false;
      }
      this.listOneItems[item].state = true;
    },

    listOneItemSelected(item) {
      if (this.listOneItems[item].state === true) return true;
      return false;
    },

    selectListTwoItem(item) {
      for (let listItem in this.listTwoItems) {
        this.listTwoItems[listItem].state = false;
      }
      this.listTwoItems[item].state = true;
    },

    listTwoItemSelected(item) {
      if (this.listTwoItems[item].state === true) return true;
      return false;
    },

    getActiveListOneContent() {
      for (const item in this.listOneItems) {
        if (this.listOneItems[item].state === true) {
          return this.listOneItems[item].content;
        }
      }
    },
    getActiveListTwoContent() {
      for (const item in this.listTwoItems) {
        if (this.listTwoItems[item].state === true) {
          return this.listTwoItems[item].content;
        }
      }
    },
    scrollToRef(refName) {
      let element = this.$refs[refName];
      element.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
    onSubmit() {
      let allFilled = true;
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      for (const key in this.form) {
        if (this.form[key] === "") {
          this[key + "State"] = false;
          allFilled = false;
        } else {
          this[key + "State"] = null;
        }
      }
      if (!this.form["email"].match(mailformat)) {
        this.emailState = false;
        allFilled = false;
      }
      if (allFilled) {
        try {
          API.mail(this.form);
          // this.$refs.contactModal.show();
          this.messageSent = true;
        } catch (error) {}
      }
    },

    toSite(route) {
      this.$router.push({
        path: route,
      });
    },
    scrollHandler(e) {
      if (window.pageYOffset > 65) {
        this.popOut = true;
      } else {
        this.popOut = false;
      }

      if (this.canReset && (window.pageYOffset < 250 || window.pageYOffset > 1800)) {
        this.isVueBarFilled = false;
        this.isPhpBarFilled = false;
        this.isMySqlBarFilled = false;
        this.isHtmlBarFilled = false;
        this.iscssScssBarFilled = false;
        this.canReset = false;
      }

      if (window.pageYOffset > 570 && window.pageYOffset < 1700) {
        if (!this.isVueBarFilled) {
          this.move("vue", 90);
          this.isVueBarFilled = true;
        }
        if (!this.isPhpBarFilled) {
          this.move("php", 80);
          this.isPhpBarFilled = true;
        }
        if (!this.isMySqlBarFilled) {
          this.move("mysql", 75);
          this.isMySqlBarFilled = true;
        }
        if (!this.isHtmlBarFilled) {
          this.move("html", 90);
          this.isHtmlBarFilled = true;
        }
        if (!this.iscssScssBarFilled) {
          this.move("cssScss", 85);
          this.iscssScssBarFilled = true;
        }
        if (
          this.isVueBarFilled &&
          this.isPhpBarFilled &&
          this.isMySqlBarFilled &&
          this.isHtmlBarFilled &&
          this.iscssScssBarFilled
        ) {
          this.canReset = true;
        }
      }
    },

    move(barId, percentage) {
      let i = 0;
      if (i == 0) {
        i = 1;
        let elem = document.getElementById(barId);
        let width = 1;
        let id = setInterval(frame, 20);
        function frame() {
          if (width >= percentage) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "resources/sass/home-v2.scss";
</style>