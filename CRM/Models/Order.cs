using System.ComponentModel.DataAnnotations.Schema;

namespace CRM.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int CustomerID { get; set; } = 1;
        public int Tax { get; set; } = 14;
        [NotMapped]
        public int SubTotal { get; set; }
        public int GrantTotal { get; set; }

        public List<Address> Addresses { get; set; }
        public Order()
        {   
            GrantTotal = SubTotal - (Tax * SubTotal) / 100;
        }

    }

}
