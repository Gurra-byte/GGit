   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5   	       WpfApp1.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp1     5   	     � Title$  
MainWindow��5   	   $	��800��6   $	��800��6)   .��5	      �  � ColumnDefinitions 5   
   �� 5      $��20 �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��20 �6    � RowDefinitions 5   
   �� 5      $��20 �6   �� 5      $
��auto �6   �� 5      $
��auto �6   �� 5      $
��auto �6   �� 5      $
��auto �6   �� 5      $��* �6   �� 5      $��20 �6   .+�5   
   9� -   5         9�Name$ SearchValueExpander��5      $��1��60   $��1��6@   $
��Name��6M   $��10, 0, 0, 0q�6[   .��5      �� $��2q�6   .+�5&      �� -   5         ��Name$ SearchValueSelector��5&      .@�5'      �� -   5         ��Name$ SearValueExpanderItemId��5'   "   $��Id��6C   �� 5(      -   5        $ SearValueExpanderItemName��5(   "   $
��Name��6E   �� 5)      -   5        $ SearValueExpanderItemType��5)   "   $
��Type��6E   �� 5*      -   5        $  SearValueExpanderItemBrand��5*   "   $��Brand��6F   �� 5+      -   5        $  SearValueExpanderItemPrice��5+   "   $��Price��6F   �� 5,      -   5        $  SearValueExpanderItemStock��5,   "   $��Stock��6F   5-      5.      5/      �� 51   
   -	   5         ��Name$ ArticleText��51      $��1��6'   $��2��67   $��10, 0, 10, 0q�6D   $	��150��6Z   �� 52   
   -
   5         ��Name$ SearchButton��52      $��1��6'   $��3��67   $��10, 10, 10, 10q�6D   $��Search��6\   $	��125��6m   6y   �� 54   
   -   5        $ CreateArticleButton��54      $��Create New Article��6.   $��4��6K   $��3��6[   $��10 ,10 ,10 ,10q�6h   $	��125��6�   $��20��6�   $��4��6�   6�   �� 55   
   -   5        $ EditArticleButton��55      $��Edit Article��6,   $��3��6C   $��3��6S   $��10 ,10 ,10 ,10q�6`   $	��125��6x   $��20��6�   $��4��6�   6�   �� 56   
   -   5        $ DeleteArticleButton��56      $��Delete Article��6.   $��2��6G   $��3��6W   $	��125��6d   $��20��6p   $��4��6|   6�   �� 57   
   -   5        $ ArticleFoundListBox��57      $��1��6/   $��4��6?   $��4��6L   $��4��6`   $	��600��6q   59      5:      