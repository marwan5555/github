const BookingTripsList = {
    title: any,
    tripsId: any,
    hotelsId: any,
    price: any
  };
  
  const BookingInformationList = {
    title: any,
    tripsId: any,
    hotelsId: any,
    price: any,
    adults: any,
    children: any,
    bookingDate: any
  };
  
  const RootParams = {
    displayName: string,
    email: string
  };
  
  export const RootStackParamList = {
    Root: RootParams,
    Home: undefined,
    Notification: undefined,
    Login: undefined,
    EmailLogin: undefined,
    Register: undefined,
    SendOTP: undefined,
    InputOTP: { phoneNumber: string, verificationId: string },
    TripDetails: { trip: any },
    AllTrips: { type: string },
    HotelScreen: { hotel: any },
    ReviewAll: { reviews: Array<any>[] },
    Search: undefined,
    BookingTrips: BookingTripsList,
    BookingInformation: BookingInformationList,
    ReviewInput: { title: any, tripsId: any, hotelsId: any },
    Settings: RootParams,
    FullScreenImage: { imageUrl: any }
  };
  