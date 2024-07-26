// Define the shape of the nested geo object
type Geo = {
  lat: string;
  lng: string;
};

// Define the shape of the address object
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

// Define the shape of the company object
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

// Define the shape of a single user
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

// Define the shape of the data returned from the API (array of users)
export type UserData = User[];
