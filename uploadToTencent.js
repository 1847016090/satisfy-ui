const path = require("path");

const fs = require("fs");

const { promisify } = require("util");

const readDir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const COS = require("cos-nodejs-sdk-v5");

var cos = new COS({
  SecretId: "AKIDa3NYYObUmuqbBc776tUt67xcfdS6Zszu",
  SecretKey: "rW0IvPipkT8xc5PsFRiroZ8cv1ub6PAl"
});

const BucketInfo = {
  Bucket: "satisfy-ui-1257212764" /* 必须 */,
  Region: "ap-chengdu" /* 必须 */
};

async function readLocalDir() {
  try {
    let deepPathArr = [];
    async function getFilePath(deepPath) {
      let data = await readDir(deepPath);
      let count = 0;
      while (count < data.length) {
        const fdPath = path.resolve(deepPath, data[count]);
        // console.log('fdPath', fdPath)
        let res = await stat(fdPath);
        if (res.isDirectory()) {
          await getFilePath(fdPath);
        } else {
          deepPathArr.push(fdPath);
        }
        count++;
      }
    }
    const localPath = path.resolve(__dirname, "./doc-site");
    await getFilePath(localPath);
    return deepPathArr;
  } catch (e) {
    console.log("e", e);
  }
}

async function upload() {
  try {
    let pathArr = await readLocalDir();
    let count = 0;
    while (count < pathArr.length) {
      let [, Key] = pathArr[count].match(/doc-site\/(.*)/);
      await cos.putObject({
        ...BucketInfo /* 必须 */,
        Key /* 必须 */,
        StorageClass: "STANDARD",
        Body: fs.createReadStream(pathArr[count]) // 上传文件对象
      });
      console.log(`${Key} 上传成功`);
      count++;
      if (count === pathArr.length) {
        console.log("全部上传成功！！！");
      }
    }
  } catch (e) {
    console.log("e", e);
  }
}
upload();
