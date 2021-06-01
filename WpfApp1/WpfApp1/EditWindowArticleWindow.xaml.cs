using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for EditWindowArticleWindow.xaml
    /// </summary>
    public partial class EditArticleWindow : Window
    {
        public Article Article { get; set; }
        public EditArticleWindow(Article article)
        {            
            InitializeComponent();
            Article = article;
            EditArticleName.Text = Article._Name;
            EditArticleType.Text = Article._Type;
            EditArticleBrand.Text = Article._Brand;
            EditArticlePrice.Text = Article._Price.ToString();
            EditArticleStock.Text = Article._Stock.ToString();
            EditArticleDescription.Text = Article._Description; 

        }

        private void EditArticleFinish_Click(object sender, RoutedEventArgs e)
        {
            DataAccess db = new DataAccess();

            try
            {
                Article._Name = EditArticleName.Text;
                Article._Type = EditArticleType.Text;
                Article._Brand = EditArticleBrand.Text;
                Article._Price = Decimal.Parse(EditArticlePrice.Text);
                Article._Stock = int.Parse(EditArticleStock.Text);
                Article._Description = EditArticleDescription.Text;
                db.UpdateArticle(Article);
            }
            catch
            {
                ErrorPopUp error = new ErrorPopUp();
                error.Show();
            }



            this.Close();
        }
    }
}
