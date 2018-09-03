function Phone( brand, price, color, apps ){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.apps = apps;
}

Phone.prototype.printInfo = function(){
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
}

function PhoneAdditionalInfo( brand, isBroken ){
    this.brand = brand;
    this.isBroken = isBroken;
}

PhoneAdditionalInfo.prototype.printInfo2 = function(){
        console.log('Is this ' + this.brand + ' broken?: ' + this.isBroken + ' -' + ' Type: ' + typeof(this.isBroken) + '.' );
}

var iphone6S = new Phone( 'Apple', 2250, 'silver' );
var samsungGalaxyS6 = new Phone( 'Android', 1550, 'black' );
var onePlus_One = new Phone( 'Android', 1890, 'green' );
var SamsungGalaxy4 = new PhoneAdditionalInfo( 'SamsungGalaxy4', true  );

iphone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlus_One.printInfo();
SamsungGalaxy4.printInfo2();

