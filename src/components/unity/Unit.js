const postFile = (id, url, type, data, sucback, errback) => {
  let newUrl = "";
  if (url.substr(0, 1) == "/") {
    newUrl = 'api' + Unit.getUrl(url);
  } else {
    newUrl = 'api/' + Unit.getUrl(url);
  }

  $(`#${id}`).ajaxSubmit({
    url: $baseUrl + newUrl,
    type: type,
    data: data,
    headers: { "user_token": user_token },
    dataType: "json",
    success: (res) => {
      sucback(res);
    },
    error: (err) => {
      console.log(err);
      if (Unit.ajaxErrorDefault(err.statusCode, err.responseJSON ? err.responseJSON.error : "")) {
        errback(err);
      }

    }
  })
  return false;
}

export default postFile


Unit.postFile("uploadImg", "/file/upload", "put", {},
  (data) => {
    let ajdata = [
      "/news/updateNews",
      "Put",
      {
        id: id,
        newsIcon: data.data,
        newsTitle: $("#newsTitle").val(),
        newsContent: desc
      }
    ]
    Unit.ajax(...ajdata,
      (data) => {
        Layer.success("提交成功,待平台审核后显示.");
        setTimeout(() => {
          this.props.history.push('/storesetting/newsManage');
        }, 1000)
      },
      (err) => {
        console.log("error", err);
      }
    );
  },
  (err) => {
    console.log(err)
  }
)


var changImg = (id,event) => {
  var e = event || window.event;
  var fileSize = event.target.files[0];
  console.log(fileSize);
  console.log(e.target.files);
  // if(fileSize.size > 1048576){
  //     Layer.error("图片超过1MB");
  //     $("#img").val("");
  //     $("#"+id).attr("src","ssssss");
  //     return;
  // }
  // for (let i = 0; i < e.target.files.length; i++) {
  //     let file = e.target.files.item(i);
  //     if (!(/^image\/.*$/i.test(file.type))) {
  //         continue; //不是图片 就跳出这一次循环
  //     }
  //     //实例化FileReader API
  //     let freader = new FileReader();
  //     freader.readAsDataURL(file);
  //     freader.onload = function(e) {
  //         $("#" + id).attr("src",e.target.result);
  //     }
  //     this.setState({
  //         flag:true,
  //     })
  // }
}