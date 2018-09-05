import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss']
})
export class HelpdeskComponent implements OnInit {
  assets = environment.assets;
  urls = environment.urls;
  ftepURL = this.urls.ftepUrl;

  logoSrc = this.assets.images + '/logo.png';

  videos = [
    {
      url: this.ftepURL + '/manual/search_create_databasket.mp4',
      description: 'Perform a Search and create/manage databasket',
      image: this.assets.images + '/helpdesk/search.jpg'
    }, {
      url: this.ftepURL + '/manual/run_sentinel2_ndvi.mp4',
      description: 'Run an NDVI service',
      image: this.assets.images + '/helpdesk/service_NDVI.jpg'
    }, {
      url: this.ftepURL + '/manual/open_ndvi_snap.mp4',
      description: 'Open a product using Sentinel2 Toolbox',
      image: this.assets.images + '/helpdesk/NDVI_product_toolbox.jpg'
    }, {
      url: this.ftepURL + 'manual/vegindex_snap.mp4',
      description: 'Create a VegetaionIndex and open result in Sentinel2 Toolbox',
      image: this.assets.images + '/helpdesk/vegind_product_toolbox.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
