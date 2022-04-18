import AppCategoryColors from "../config/AppCategoryColors";
import AppColors from "../config/AppColors";

export default {
  categories: [
    {
      id: 1,
      type: 'Vacation',
      icon: 'beach',
      color: AppCategoryColors.yellow,
    },
    {
      id: 2,
      type: 'Holiday',
      icon: 'star',
      color: AppCategoryColors.green,
    },
    {
      id: 3,
      type: 'Love',
      icon: 'cards-heart',
      color: AppCategoryColors.red,
    },
    {
      id: 4,
      type: 'Celebration',
      icon: 'party-popper',
      color: AppCategoryColors.pink,
    },
    {
      id: 5,
      type: 'Work',
      icon: 'briefcase',
      color: AppCategoryColors.orange,
    },
    {
      id: 6,
      type: 'All memories',
      icon: 'expand-all',
      color: AppColors.darkGray,
    },
  ]
}