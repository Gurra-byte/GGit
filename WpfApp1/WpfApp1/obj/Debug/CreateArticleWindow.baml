   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5   	   !    WpfApp1.CreateArticleWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp1     5   	     � Title$  CreateArticleWindow��5   	   $	��450��6%   $	��600��62   .��5	      �  � ColumnDefinitions 5
   
   �� 5      $��20 �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��20 �6    � RowDefinitions 5   
   �� 5      $��20 �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��1* �6   �� 5      $��20 �6   .+�5    
   �� $��Name*��6   $��1��6!   $��1��61   $��10,10,10,10q�6>   �� 5!   
   $��Type*��6   $��1��6!   $��2��61   $��10,10,10,10q�6>   �� 5"   
   $��Brand*��6   $��1��6"   $��3��62   $��10,10,10,10q�6?   �� 5#   
   $��Price*��6   $��1��6"   $��4��62   $��10,10,10,10q�6?   �� 5$   
   $��Stock*��6   $��1��6"   $��5��62   $��10,10,10,10q�6?   �� 5%   
   $��Description��6   $��1��6'   $��6��67   $��10,10,10,10q�6D   �� 5'   
   -   5         ��Name$ NewArticleName��5'      $��2��6*   $��1��6:   $��20��6G   �� 5(   
   -   5        $ NewArticleType��5(      $��2��6*   $��2��6:   $��20��6G   �� 5)   
   -   5        $ NewArticleBrand��5)      $��2��6+   $��3��6;   $��20��6H   �� 5*   
   -   5        $ NewArticlePrice��5*      $��2��6+   $��4��6;   $��20��6H   �� 5+   
   -   5        $ NewArticleStock��5+      $��2��6+   $��5��6;   $��20��6H   �� 5,   
   -   5        $ NewArticleDescription��5,      $��2��61   $��6��6A   $��3��6N   $��4��6b   �� 5.   
   -   5         ��Name$ CreateArticleFinish��5.      $��4��6P   $��1��6`   $��Create��6m   50      51      