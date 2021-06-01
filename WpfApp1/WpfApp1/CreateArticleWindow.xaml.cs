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
    /// Interaction logic for CreateArticleWindow.xaml
    /// </summary>
    public partial class CreateArticleWindow : Window
    {
        public CreateArticleWindow()
        {
            InitializeComponent();
        }

        private void CreateArticleFinish_Click(object sender, RoutedEventArgs e)
        {
            DataAccess db = new DataAccess();

            Article newArticle = new Article();
            try   
            {
                newArticle._Name = NewArticleName.Text;
                newArticle._Type = NewArticleType.Text;
                newArticle._Brand = NewArticleBrand.Text;
                newArticle._Price = Decimal.Parse(NewArticlePrice.Text);
                newArticle._Stock = int.Parse(NewArticleStock.Text);
                newArticle._Description = NewArticleDescription.Text;
            }
            catch
            {
                ErrorPopUp error = new ErrorPopUp();
                error.Show();
            }
            db.InsertArticle(newArticle);


            this.Close();
        }
            
    }
}
