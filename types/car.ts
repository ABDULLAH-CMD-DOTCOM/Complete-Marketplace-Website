
export interface Car {
    _id : string;
    name : string;
    _type : "car";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    
    pricePerDay : string;
    originalPrice : string;
    seatingCapacity : string;
    description : string;
    title : string;
    fuelCapacity : string;
    Tags : string;
    type : string;
    Transmission : string;
    slug : {
        _type : "slug",
        current : string;
    }

}
