# Mash Up Recruit

## XSS방지 작업

XSS방지를 위하여 서버에 요청시 requestBody에 포함된 값 중 `"` `'`, `&`, `<`, `>` 해당 특수문자가 포함되어 있다면 entity코드로 escape되어 DB에 저장되고 그 값이 그대로 응답되어 내려옵니다.

그렇기 때문에 innerHTML이나 eval을 쓰는 경우가 아니라면 해당 값들은 lodash-es/unescape 함수를 사용하여 치환하여 렌더링해야 합니다. 서버에서 내려오는 모든값에 대해 고려 할 필요는 없으며 프론트에서 서버로 요청한값을 그대로 다시 받아와서 렌더링해야 하는 경우 고려되어야하는 사항입니다.
