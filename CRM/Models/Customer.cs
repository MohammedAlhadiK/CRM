using System.Net;

namespace CRM.Models
{
    public class Customer
    {
        public int ID { get; set; }
        public string Code { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public List<Address> Addresses { get; set; } = new List<Address>();
        public bool isActive { get; set; }

    }

}
