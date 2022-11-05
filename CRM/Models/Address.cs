using System.ComponentModel.DataAnnotations.Schema;

namespace CRM.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string Line1 { get; set; } = string.Empty;
        public string Line2 { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public bool ShippingAddress { get; set; } = false;
        public bool BillingAddress { get; set; } = true;
        public int CustomerID { get; set; } = 0;
        
    }
}
