import divisions from "./assets/divisions.js";
import districts from "./assets/districts.js";
import upazillas from "./assets/upazillas.js";
import unions from "./assets/unions.js";

class BDADDRESS {
  static divisions() {
    return divisions;
  }

  static districts() {
    return districts;
  }

  static district(id) {
    if (!id) {
      return { message: "Plese insert a division id as params." };
    }
    return this.districts().filter((district) => district.division_id === id.toString());
  }

  static upazillas() {
    return upazillas;
  }

  static upazilla(id) {
    if (!id) {
      return { message: "Plese insert a district id as params." };
    }
    return this.upazillas().filter((upazilla) => upazilla.district_id === id.toString());
  }

  static unions() {
    return unions;
  }

  static union(id) {
    if (!id) {
      return { message: "Plese insert a upazilla id as params." };
    }
    return this.unions().filter((union) => union.upazilla_id === id.toString());
  }
}

export default BDADDRESS;
