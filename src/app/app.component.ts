import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  data = [
    {
      locationCode: "17",
      realLocationCode: "A0017",
      effectiveFrom: "1995-01-01 00:00:00.0",
      effectiveTo: "1996-05-19 23:59:59.0",
      locationName: "Dun Laoghaire",
      additionalName: ""
    },
    {
      locationCode: "17",
      realLocationCode: "A0017",
      effectiveFrom: "1996-05-20 00:00:00.0",
      effectiveTo: "1999-07-26 23:59:59.0",
      locationName: "Dun Laoghaire",
      additionalName: "Sealink Terminal"
    },
    {
      locationCode: "17",
      realLocationCode: "A0017",
      effectiveFrom: "1999-07-27 00:00:00.0",
      effectiveTo: null,
      locationName: "Dun Laoghaire",
      additionalName: "Stena Line Ferry Terminal"
    },
    {
      locationCode: "28",
      realLocationCode: "A0028",
      effectiveFrom: "1995-01-01 00:00:00.0",
      effectiveTo: "1999-07-26 23:59:59.0",
      locationName: "Dublin",
      additionalName: ""
    },
    {
      locationCode: "28",
      realLocationCode: "A0028",
      effectiveFrom: "1999-07-27 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin",
      additionalName: "Bus Eireann, Busaras, Store Street"
    },
    {
      locationCode: "29",
      realLocationCode: "A0029",
      effectiveFrom: "2002-06-28 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin Airport",
      additionalName: "Arrivals Rd, Stop 8"
    },
    {
      locationCode: "30",
      realLocationCode: "A0030",
      effectiveFrom: "2005-10-03 00:00:00.0",
      effectiveTo: "2010-05-13 23:59:59.0",
      locationName: "Dublin Port",
      additionalName: "Ferry Terminal"
    },
    {
      locationCode: "30",
      realLocationCode: "A0030",
      effectiveFrom: "2010-05-14 00:00:00.0",
      effectiveTo: "2012-03-13 23:59:59.0",
      locationName: "Dublin Port, Stena Line",
      additionalName: "Ferry Terminal"
    },
    {
      locationCode: "30",
      realLocationCode: "A0030",
      effectiveFrom: "2012-03-14 00:00:00.0",
      effectiveTo: "2012-03-14 23:59:59.0",
      locationName: "Dublin Port, Irish Ferries",
      additionalName: "Ferry Terminal"
    },
    {
      locationCode: "30",
      realLocationCode: "A0030",
      effectiveFrom: "2012-03-15 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin Port, Irish Ferries",
      additionalName: "Irish Ferries Terminal"
    },
    {
      locationCode: "31",
      realLocationCode: "A0031",
      effectiveFrom: "2010-05-13 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin Port, Irish Ferries",
      additionalName: ""
    },
    {
      locationCode: "32",
      realLocationCode: "A32",
      effectiveFrom: "2019-09-02 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin Airport, Terminal 1",
      additionalName: ""
    },
    {
      locationCode: "33",
      realLocationCode: "A33",
      effectiveFrom: "2019-09-02 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin Airport, Terminal 2",
      additionalName: ""
    },
    {
      locationCode: "34",
      realLocationCode: "A34",
      effectiveFrom: "2019-09-02 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin, Custom House Quay",
      additionalName: ""
    },
    {
      locationCode: "35",
      realLocationCode: "A35",
      effectiveFrom: "2019-09-02 00:00:00.0",
      effectiveTo: null,
      locationName: "Dublin, Arran Quay (Smithfield)",
      additionalName: ""
    },
    {
      locationCode: "38",
      realLocationCode: "A0038",
      effectiveFrom: "1995-01-01 00:00:00.0",
      effectiveTo: "1996-05-19 23:59:59.0",
      locationName: "Kinnegad",
      additionalName: ""
    },
    {
      locationCode: "38",
      realLocationCode: "A0038",
      effectiveFrom: "1996-05-20 00:00:00.0",
      effectiveTo: "1999-07-26 23:59:59.0",
      locationName: "Kinnegad",
      additionalName: "Main Street"
    },
    {
      locationCode: "38",
      realLocationCode: "A0038",
      effectiveFrom: "1999-07-27 00:00:00.0",
      effectiveTo: "2016-11-14 23:59:59.0",
      locationName: "Kinnegad",
      additionalName: "Main Street."
    },
    {
      locationCode: "38",
      realLocationCode: "A0038",
      effectiveFrom: "2016-11-15 00:00:00.0",
      effectiveTo: "2019-09-20 23:59:59.0",
      locationName: "Kinnegad",
      additionalName: "Main St. Hilamar Hotel"
    },
    {
      locationCode: "38",
      realLocationCode: "A0038",
      effectiveFrom: "2019-09-21 00:00:00.0",
      effectiveTo: null,
      locationName: "Kinnegad",
      additionalName: "Main St"
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "1995-01-01 00:00:00.0",
      effectiveTo: "1996-05-19 23:59:59.0",
      locationName: "Enfield (S.Ireland)",
      additionalName: ""
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "1996-05-20 00:00:00.0",
      effectiveTo: "1999-07-26 23:59:59.0",
      locationName: "Enfield",
      additionalName: ""
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "1999-07-27 00:00:00.0",
      effectiveTo: "2004-03-03 23:59:59.0",
      locationName: "Enfield",
      additionalName: "Mulligan's"
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "2004-03-04 00:00:00.0",
      effectiveTo: "2012-03-09 23:59:59.0",
      locationName: "Enfield",
      additionalName: "Ryan's"
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "2012-03-10 00:00:00.0",
      effectiveTo: "2016-11-14 23:59:59.0",
      locationName: "Enfield",
      additionalName: "Garda Station"
    },
    {
      locationCode: "58",
      realLocationCode: "A0058",
      effectiveFrom: "2016-11-15 00:00:00.0",
      effectiveTo: "2019-09-20 23:59:59.0",
      locationName: "Enfield",
      additionalName: "Supervalue, Main Street"
    }
  ];

  searchText: string;

  searchRes = [];

  getData() {
    console.log("calling");
    console.log(this.searchText);

    this.searchRes = this.data.filter(
      data =>
        data.locationName
          .toLowerCase()
          .indexOf(this.searchText.toLowerCase()) !== -1
    );

    console.log(this.searchRes);
  }
}
