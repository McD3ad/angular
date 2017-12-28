import { BlogComponent } from "./blog/blog.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./blog/post/post.component";

export const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'posts',
        component: BlogComponent
    },
    {
        path: 'posts/:slug',
        component: PostComponent
    }
]