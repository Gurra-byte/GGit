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
    /// Interaction logic for DeleteArticleWindow.xaml
    /// </summary> 
    public partial class DeleteArticleWindow : Window
    {
        public Article Article { get; set; }
        public DeleteArticleWindow(Article article)
        {
            InitializeComponent();
            Article = article;
            DeleteArticleName.Text = Article._Name;
            DeleteArticleType.Text = Article._Type;
            DeleteArticleBrand.Text = Article._Brand;
            DeleteArticlePrice.Text = Article._Price.ToString();
            DeleteArticleStock.Text = Article._Stock.ToString();
            DeleteArticleDescription.Text = Article._Description;
        }

        private void DeleteArticleFinishButton_Click(object sender, RoutedEventArgs e)
        {
            //anropa rätt dataAccess
        }
    }
}
