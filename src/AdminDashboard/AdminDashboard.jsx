import React from "react";

export const AdminDashboard = () => {
  return (
    <div>
      <aside class="left-sidebar" data-sidebarbg="skin6">
        <div class="scroll-sidebar">
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="index.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-view-dashboard"></i>
                  <span class="hide-menu">Dashboard</span>
                </a>
              </li>
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-profile.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-account-network"></i>
                  <span class="hide-menu">Profile</span>
                </a>
              </li>
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="table-basic.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-border-all"></i>
                  <span class="hide-menu">Table</span>
                </a>
              </li>
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="icon-material.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-face"></i>
                  <span class="hide-menu">Icon</span>
                </a>
              </li>
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="starter-kit.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-file"></i>
                  <span class="hide-menu">Blank</span>
                </a>
              </li>
              <li class="sidebar-item">
                {" "}
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="error-404.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-alert-outline"></i>
                  <span class="hide-menu">404</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive">
              <table class="table v-middle">
                <thead>
                  <tr class="bg-light">
                    <th class="border-top-0">Admins</th>
                    <th class="border-top-0">E-mail</th>
                    <th class="border-top-0">Phone Number</th>
                    <th class="border-top-0">Role</th>
                    <th class="border-top-0">Tickets</th>
                    <th class="border-top-0">Change Profile</th>
                    <th class="border-top-0">Remove Admin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="m-r-10">
                          <a class="btn btn-circle d-flex btn-info text-white">
                            EA
                          </a>
                        </div>
                        <div class="">
                          <h4 class="m-b-0 font-16">Elite Admin</h4>
                        </div>
                      </div>
                    </td>
                    <td>Single Use</td>
                    <td>John Doe</td>
                    <td>
                      <label class="label label-danger">Angular</label>
                    </td>
                    <td>46</td>
                    <td>356</td>
                    <td>
                      <h5 class="m-b-0">$2850.06</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="m-r-10">
                          <a class="btn btn-circle d-flex btn-orange text-white">
                            MA
                          </a>
                        </div>
                        <div class="">
                          <h4 class="m-b-0 font-16">Monster Admin</h4>
                        </div>
                      </div>
                    </td>
                    <td>Single Use</td>
                    <td>Venessa Fern</td>
                    <td>
                      <label class="label label-info">Vue Js</label>
                    </td>
                    <td>46</td>
                    <td>356</td>
                    <td>
                      <h5 class="m-b-0">$2850.06</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="m-r-10">
                          <a class="btn btn-circle d-flex btn-success text-white">
                            MP
                          </a>
                        </div>
                        <div class="">
                          <h4 class="m-b-0 font-16">Material Pro Admin</h4>
                        </div>
                      </div>
                    </td>
                    <td>Single Use</td>
                    <td>John Doe</td>
                    <td>
                      <label class="label label-success">Bootstrap</label>
                    </td>
                    <td>46</td>
                    <td>356</td>
                    <td>
                      <h5 class="m-b-0">$2850.06</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="m-r-10">
                          <a class="btn btn-circle d-flex btn-purple text-white">
                            AA
                          </a>
                        </div>
                        <div class="">
                          <h4 class="m-b-0 font-16">Ample Admin</h4>
                        </div>
                      </div>
                    </td>
                    <td>Single Use</td>
                    <td>John Doe</td>
                    <td>
                      <label class="label label-purple">React</label>
                    </td>
                    <td>46</td>
                    <td>356</td>
                    <td>
                      <h5 class="m-b-0">$2850.06</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
