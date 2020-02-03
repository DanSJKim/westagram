const commentArea = document.getElementsByClassName('article-comment-area')[0];
const submitBtn = document.getElementsByClassName('article-comment-btn')[0];
const commentList = document.getElementsByClassName('article-recent-comment')[0];

// 댓글 전체
const commentWrapper = document.getElementsByClassName('article-recent-comment')[0];
let commentId = 0;
let removeButton;

// 댓글 추가하기
submitBtn.addEventListener('click', function() {


    let commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');

    let accountName = document.createElement('span');
    accountName.classList.add('account-name');

    let contentName = document.createTextNode('wecode_bootcamp ');
    commentItem.appendChild(accountName);
    accountName.appendChild(contentName);

    let contentText = document.createTextNode(commentArea.value);
    commentItem.appendChild(contentText);

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "삭제버튼";
    removeButton.classList.add('article-remove-button');
    removeButton.addEventListener('click', deleteComment);

    // comment에 특정 id 지정
    commentItem.id = commentId;
    commentItem.appendChild(removeButton);
    commentId++;

    // 리스트에 전체 댓글 폼 추가
    commentList.appendChild(commentItem);

    commentArea.value = "";
});


// 댓글 엘리먼트 삭제 이벤트
function deleteComment(event) {
    // 버튼의 부모 노드
    console.dir(event.target.parentNode);
    commentWrapper.removeChild(event.target.parentNode);
}