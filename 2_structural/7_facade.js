class Complaints {
    constructor() {
        this.complaints = []
    }
    reply(complaint) { }
    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product complaint: ${id}: ${customer} (${details})`
    }
}
class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service complaint: ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry {
    constructor() {
        this.productComplaints = new ProductComplaints();
        this.serviceComplaints = new ServiceComplaints();
    }
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'product') {
            complaint = new ProductComplaints()
            return this.productComplaints.add({
                id,
                customer,
                details,
            });
        }
        complaint = new ServiceComplaints()
        return this.serviceComplaints.add({
            id,
            customer,
            details,
        });

        // return complaint.add({ id, customer, details })
    }
    getComplaints() {
        return [
            ...this.productComplaints.complaints,
            ...this.serviceComplaints.complaints,
        ];
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('John', 'product', 'The product is broken'));
console.log(registry.register('Ann', 'service', 'The service is broken'));

// console.log(registry.productComplaints.complaints);
// console.log(registry.serviceComplaints.complaints);
console.log('getComplaints', registry.getComplaints());