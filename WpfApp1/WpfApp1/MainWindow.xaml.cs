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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        DataAccess db = new DataAccess();
        List<Article> Articles = new List<Article>();
        


        public void SetArticles()
        {
            Articles = db.GetArticles("", "Name");
            
        }

        public MainWindow()
        {
            InitializeComponent();
            SetArticles();
            JsonWriter writer = new JsonWriter(Articles);
            writer.writeJSON();
            ArticleFoundListBox.DataContext = Articles;
            UpdateBinding();
        }
        private void UpdateBinding()
        {  
            ArticleFoundListBox.ItemsSource = Articles;
            ArticleFoundListBox.DisplayMemberPath = "FullInfo";
            
        }
        /// <summary>
        /// Method that is called when the "search" button in the main window is pressed.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SearchClick(object sender, RoutedEventArgs e)
        {

            Articles = db.GetArticles(ArticleText.Text, SearchValueExpander.Header.ToString());

            UpdateBinding();
        }
        /// <summary>
        /// Method for using expander box to chose what category to use in search of items.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SearchValueSelector_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            ListBoxItem item = (ListBoxItem)(sender as ListBox).SelectedItem;
            SearchValueExpander.Header = item.Content;
        }
        /// <summary>
        /// Method to open new window when "Create new article" button is clicked.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void CreateArticleButton_Click(object sender, RoutedEventArgs e)
        {
            CreateArticleWindow createArticle = new CreateArticleWindow();
            createArticle.Show();
            
        }

        private void EditArticleButton_Click(object sender, RoutedEventArgs e)
        {
            if (ArticleFoundListBox.SelectedItem != null && ArticleFoundListBox.SelectedItem is Article)
            {
                EditArticleWindow editArticle = new EditArticleWindow((ArticleFoundListBox.SelectedItem as Article));
                editArticle.Show();
            }
            else
            {
                return;
            }
        }

        private void DeleteArticleButton_Click(object sender, RoutedEventArgs e)
        {
            if (ArticleFoundListBox.SelectedItem != null && ArticleFoundListBox.SelectedItem is Article)
            {
                DeleteArticleWindow window = new DeleteArticleWindow((ArticleFoundListBox.SelectedItem as Article));
                window.Show();
            }
            else
            {
                return;
            }
        }
    }
}
