import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  dialectOptions: {
    ssl: {
      require: true,  // Bắt buộc sử dụng SSL
      rejectUnauthorized: false  // Tùy chọn này vô hiệu hóa việc kiểm tra chứng chỉ
    }
  },
  'dialect': config.dialect,
  'storage': ':memory:',
});
