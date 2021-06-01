using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace WpfApp1
{
    public class DataAccess
    {
        public List<Article> GetArticles(string searchValue, string searchType)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("StoreDB")))
            {
                int intConv = 0;
                decimal decConv = 0m;
                switch (searchType)
                {
                    case "Id":
                        intConv = int.Parse(searchValue);
                        return connection.Query<Article>($"dbo.GetArticlesById @Id", new {Id = intConv }).ToList();
   

                    case "Name":
                        return connection.Query<Article>($"dbo.GetArticlesByName @Name", new {Name = searchValue }).ToList();
                       

                    case "Type":
                        return connection.Query<Article>($"dbo.GetArticlesByType @Type", new { Type = searchValue}).ToList();
                       

                    case "Brand":
                        return connection.Query<Article>($"dbo.GetArticlesByBrand @Brand", new { Brand = searchValue}).ToList();
                        

                    case "Price":
                        decConv = Decimal.Parse(searchValue);
                        return connection.Query<Article>($"dbo.GetArticlesByPrice @Price", new { Price = decConv }).ToList();
                        

                    case "Stock":
                        intConv = int.Parse(searchValue);
                        return connection.Query<Article>($"dbo.GetArticlesByStock @", new { Stock = intConv}).ToList();

                    default:
                        throw new ArgumentOutOfRangeException("Your search value was not of a valid type. Check SearchValueItemType");
                }
                
            }
        }
        public void InsertArticle(Article newArticle) 
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("StoreDB")))
            {
               connection.Query<Article>("dbo.InsertArticle @Name, @Type, @Brand, @Price, @Stock, @Description", new {
                   Name = newArticle._Name, Type = newArticle._Type, Brand = newArticle._Brand, Price = newArticle._Price, Stock = newArticle._Stock, Description = newArticle._Description});
            }

        }
        public void UpdateArticle(Article article)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("StoreDB")))
            {
                connection.Query<Article>("dbo.UpdateArticle @Id, @Name, @Type, @Brand, @Price, @Stock, @Description", new
                {
                    Id = article._Id,
                    Name = article._Name,
                    Type = article._Type,
                    Brand = article._Brand,
                    Price = article._Price,
                    Stock = article._Stock,
                    Description = article._Description
                });
            }
        }
    }
}

