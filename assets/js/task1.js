const customer = {
    fisrtName: 'Test',
    lastName: 'Testovich',
    email: 'test@gmail.com',
    phone: '380960000000',
    address: {
        city: 'Chernivtsi',
        street: 'Holovna',
        house: '120A',
        appartment: 57
    },
    outputAddress() {
        console.log(`${this.address.city} ${this.address.street} ${this.address.house} ${this.address.appartment}`)
    },
    changePhone(newPhone) {
        this.phone = newPhone;
    }
}

customer.outputAddress();
customer.changePhone('380960000001');

customer.isMale = true;
delete customer.address;

const copyCustomer1 = Object.assign({}, customer);
const copyCustomer2 = { ...customer };

document.write(`
  <article class="card">
    ${customer.isMale 
        ? '<i class="card-gender fa-solid fa-mars"></i>'
        : '<i class="card-gender fa-solid fa-venus"></i>'}
    <img class="card-photo" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="${customer.firstName} photo">
    <h2 class="card-name">${customer.fisrtName} ${customer.lastName}</h2>
    <section class="card-info-wrapper">
        <div class="card-info-item">
            <i class="fa-solid fa-envelope"></i>
            <a class="card-link" href="mailto:${customer.email}">${customer.email}</a>
        </div>
        <div class="card-info-item">
            <i class="fa-solid fa-phone"></i>
            <a class="card-link" href="tel:${customer.phone}">${customer.phone}</a>
        </div>
    </section>
  </article>
`);