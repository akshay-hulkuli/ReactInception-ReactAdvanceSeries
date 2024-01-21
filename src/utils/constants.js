/*
    There are 2 types of export/import

    1. named export/import 
        Used when we need to export multiple things a file
        Example:
        export default cloudinaryCDN;
        import {cloudinaryCDN}  from './utils/constants';

    2. default export/import
        There can be only one default export in a file
        Example:
        export const cloudinaryCDN;
        import cloudinaryCDN from './utils/constants';

    We can have both named and default export in a file. The way of importing them remains as explained above. That is
    default imports are done directly and named import is done using flower backets.

*/

export const cloudinaryCDN = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
const abc = "asd";

export default abc;