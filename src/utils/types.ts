export interface steps {
    name: string;
    description: string;
  }
 export interface serviceType {
    name: string;
    description: string;
    animate?: string;
    steps?: steps[];
  }