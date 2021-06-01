using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace WpfApp1
{
    class JsonWriter
    {
        //DirectoryInfo filePath = new DirectoryInfo(@"C:\Users\Gustav\Desktop\GGit\test.txt").GetDirectories();
        List<Article> Articles = new List<Article>();

        public JsonWriter(List<Article> articles)
        {
            Articles = articles;
        }
        
       public void writeJSON()
        {
            
            string[] curly = new string[] {"{", "}"};

            using (StreamWriter sw = new StreamWriter(@"C:\Users\Gustav\Desktop\GGit\test.txt"))
            {
                string line = "";
                Article lastItem = Articles[Articles.Count - 1];
                if (
                    line == "[")
                {
                }
                foreach (var article in Articles)
                {
                    if(article != lastItem)
                    {
                       sw.WriteLine($"{curly[0]}\n\"id\": {article._Id},\n" +
                       $"\"name\" : \"{article._Name}\",\n" +
                       $"\"type\" : \"{article._Type}\",\n" +
                       $"\"brand\" : \"{article._Brand}\",\n" +
                       $"\"price\" : {article._Price},\n" +
                       $"\"stock\" : {article._Stock},\n" +
                       $"\"description\" : \"{article._Description}\"\n" +
                       $"{curly[1]},");
                    }
                    else
                    {
                       sw.WriteLine($"{curly[0]}\n\"id\": {lastItem._Id},\n" +
                       $"\"name\" : \"{lastItem._Name}\",\n" +
                       $"\"type\" : \"{lastItem._Type}\",\n" +
                       $"\"brand\" : \"{lastItem._Brand}\",\n" +
                       $"\"price\" : {lastItem._Price},\n" +
                       $"\"stock\" : {lastItem._Stock},\n" +
                       $"\"description\" : \"{lastItem._Description}\"\n" +
                       $"{curly[1]}");
                    }
                }   
            }
        }
    }
}
