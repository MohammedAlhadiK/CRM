namespace CRM.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Descrition { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}


