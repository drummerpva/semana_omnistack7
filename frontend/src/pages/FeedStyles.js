import styled from 'styled-components';

export const PostList = styled.section`
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    padding: 0 30px;
    article {
        background: #FFF;
        border: 1px solid #DDD;
        margin-top: 30px;
        header {
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .user-info {
                display: flex;
                flex-direction: column;
                span {
                    font-size: 13px;
                }
                span.place {
                    font-size: 11px;
                    color: #666;
                }
            }
        }

    }
`;