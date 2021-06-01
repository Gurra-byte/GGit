using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp1
{
    public class Article
    {
        public int _Id { get; set; }
        public string _Name { get; set; }
        public string _Type { get; set; }
        public string _Brand { get; set; }
        public decimal _Price { get; set; }
        public int _Stock { get; set; }
        public string _Description { get; set; }
        public string FullInfo
        {
            get
            {
                return $"Id: {_Id}" +
                    $"\nProduct: {_Name}" +
                    $"\nType: {_Type}" +
                    $"\nBrand: {_Brand}" +                   
                    $"\nPrice: {_Price}" +
                    $"\nStock: {_Stock}" +
                    $"\n";
            }
        }
        public Article()
        {
            
        }
    }
}
