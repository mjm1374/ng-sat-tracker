export interface marker {
    satlat: number;
    satlng: number;
    satname?: string;
    draggable: boolean;
  }
  
  export interface satellite {
    intDesignator: string;
    launchDate: Date;
    satalt: Float32Array;
    satid: number;
    satlat: Float32Array;
    satlng: Float32Array;
    satname: string;
  }

  export interface position {
    lat: number;
    lng: number;
    draggable?: boolean;
  }