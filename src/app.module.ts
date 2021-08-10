import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { AdvertsModule } from './adverts/adverts.module';
import { NewsModule } from './news/news.module';
import { PromotionModule } from './promotion/promotion.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PromotionsModule } from './promotions/promotions.module';

@Module({
  imports: [
    UserModule,
    ArticlesModule,
    CommentsModule,
    SubscribersModule,
    AdvertsModule,
    NewsModule,
    PromotionModule,
    AuthModule,
    UsersModule,
    PromotionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
