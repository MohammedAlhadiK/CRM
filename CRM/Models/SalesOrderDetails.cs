using System.ComponentModel.DataAnnotations.Schema;

namespace CRM.Models
{
    public class SalesOrderDetails
    {
        public int ID { get; set; }
        public int OrderID { get; set; }
        public int LineNo { get; set; }
        public int ProductID { get; set; }
        public int LinePrice { get; set; }
        public int LineOrderQTY { get; set; }
        public int LineTaxAmount { get; set; }
        [NotMapped]
        public int LineTotal { get; set; }

        public SalesOrderDetails()
        {
            LineTotal = LinePrice * LineOrderQTY;
        }
    }
}
