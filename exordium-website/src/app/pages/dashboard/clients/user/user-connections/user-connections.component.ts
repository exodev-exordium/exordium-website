import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

import * as jQuery from 'jquery';
const $ = jQuery;

import 'bootstrap-notify';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {
  public currentUser;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    console.log(location);
  }

  ngOnInit() {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;
    });

    // Get Params
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length !== 0) {

        const notify = $.notify({
          icon: 'fa fa-fw fa-info-circle',
          message: '<strong>Third Party Connection!</strong> This could take a moment...'
        }, {
          type: 'primary',
          placement: {
            from: 'bottom',
            align: 'right'
          },
          showProgressbar: true,
          delay: 10000,
          animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
          },
          template: '<div data-notify="container" class="notify-width alert alert-{0}" role="alert">' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '<div class="progress notifyAlert" data-notify="progressbar">' +
              '<div class="progress-bar bg-{0}" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>' +
            '</div>' +
          '</div>'
        });

        if (params.discord) {

          this.userService.connectDiscord({access_token: params.discord}).subscribe((res) => {
            if (res.result) {
              notify.update({
                type: 'success',
                icon: 'fa fa-fw fa-check',
                message: `<strong>Success!</strong> Your Exordium account has been connected to Discord successfully!`
              });
            }
          },
          (err) => {
            notify.update({
              type: 'danger',
              icon: 'fa fa-fw fa-times',
              message: `<strong>Error!</strong> Sorry there was an error connecting your account to Discord!`
            });
          });
    
        }
        if (params.github) {

          this.userService.connectGithub().subscribe(res => {
            console.log(res);
            //this.currentUser = res.response;
          });

        }
      }
    }); 
  }

}
