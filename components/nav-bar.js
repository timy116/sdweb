class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <!-- navbar -->
    <nav class="book-navbar navbar navbar-expand-lg py-md-0" style="background-color: #8aa96c">
      <div class="container px-md-0">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bookNavBar"
          aria-controls="bookNavBar" aria-controls="bookNavBar" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- nav wrapper -->
        <div id="bookNavBar" class="collapse navbar-collapse">
          <ul class="navbar-nav mb-sm-0 w-full justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="../maintenance/Announce.aspx"
                id="ctl00_dtlMenu_ctl00_lnkMenu">系統公告</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="indicator.html"
                id="ctl00_dtlMenu_ctl01_lnkMenu">農業指標</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="inquire_advance.html"
                id="ctl00_dtlMenu_ctl02_lnkMenu">動態查詢</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="../trade/tradereport.aspx"
                id="ctl00_dtlMenu_ctl03_lnkMenu">農業貿易</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="book.html" id="ctl00_dtlMenu_ctl04_lnkMenu">統計書刊</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="../common/Download.aspx"
                id="ctl00_dtlMenu_ctl05_lnkMenu">下載區</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="../official/OfficialInformation.aspx"
                id="ctl00_dtlMenu_ctl06_lnkMenu">公務統計</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-md-2 px-lg-3 px-xl-4" href="../maintenance/Question.aspx"
                id="ctl00_dtlMenu_ctl07_lnkMenu">常見問題</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define("nav-bar", NavBar);
