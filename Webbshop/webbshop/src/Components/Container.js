import React from 'react';
import ArticleWindow from './ArticleWindow';
import SidebarLeftSearch from './SidebarLeftSearch';
import SidebarRightAdds from './SidebarRightAdds';

const Container = ({articles}) => {
    return (
        <div className='container'>
            <SidebarLeftSearch />
            <ArticleWindow  artilces={articles}/>
            <SidebarRightAdds />
        </div>
    )
}

export default Container
