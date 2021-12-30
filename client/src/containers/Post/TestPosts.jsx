import React, { useEffect, Suspense } from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from './../../feature/postsSlice';

// const posts = [
//     {
//         _id: '61c627a175140d2289173943',
//         user: {
//             _id: '61c5eccf28db50d434fdb0bb',
//             email: 'jannowak@gmail.com',
//             username: 'jannowak123',
//             role: 'teacher',
//         },
//         title: 'Nie rozumiem pola w moongose',
//         content:
//             'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//         categories: [],
//         stars: [
//             {
//                 _id: '61c626cb75140d2289173935',
//                 email: 'maciejskarga@gmail.com',
//                 username: 'skargamaciek',
//                 role: 'teacher',
//             },
//         ],
//         comments: [
//             {
//                 _id: '61cc2c7414e897d9fa531b4d',
//                 user: {
//                     _id: '61c5eccf28db50d434fdb0bb',
//                     email: 'jannowak@gmail.com',
//                     username: 'jannowak123',
//                     role: 'teacher',
//                 },
//                 content:
//                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
//                 stars: [],
//                 createdAt: '2021-12-29T09:37:56.843Z',
//                 updatedAt: '2021-12-29T09:37:56.843Z',
//                 __v: 0,
//             },
//             {
//                 _id: '61cc2c9214e897d9fa531b51',
//                 user: {
//                     _id: '61c5eccf28db50d434fdb0bb',
//                     email: 'jannowak@gmail.com',
//                     username: 'andrzejnowak',
//                     role: 'teacher',
//                 },
//                 content:
//                     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
//                 stars: [],
//                 createdAt: '2021-12-29T09:38:26.809Z',
//                 updatedAt: '2021-12-29T09:38:26.809Z',
//                 __v: 0,
//             },
//             {
//                 _id: '61cc2caa14e897d9fa531b55',
//                 user: {
//                     _id: '61c5eccf28db50d434fdb0bb',
//                     email: 'jannowak@gmail.com',
//                     username: 'macieqqq',
//                     role: 'teacher',
//                 },
//                 content:
//                     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//                 stars: [],
//                 createdAt: '2021-12-29T09:38:50.498Z',
//                 updatedAt: '2021-12-29T09:38:50.498Z',
//                 __v: 0,
//             },
//         ],
//         createdAt: '2021-12-24T20:03:45.564Z',
//         updatedAt: '2021-12-29T09:38:50.646Z',
//     },
//     {
//         _id: '61c627b175140d2289173945',
//         user: {
//             _id: '61c5eccf28db50d434fdb0bb',
//             email: 'jannowak@gmail.com',
//             username: 'jannowak123',
//             role: 'teacher',
//         },
//         title: 'Jak zrobić bazę danych ?',
//         content:
//             'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
//         categories: [
//             { _id: '61c481cf36c3ada27b75e07e', name: 'matematyka' },
//             { _id: '61c5cb9db3a45175d6402493', name: 'rosyjski' },
//             { _id: '61c5e000605a26c6544cc479', name: 'niemiecki' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:04:01.531Z',
//         updatedAt: '2021-12-29T09:35:16.041Z',
//     },
//     {
//         _id: '61c627bb75140d2289173947',
//         user: {
//             _id: '61c5eccf28db50d434fdb0bb',
//             email: 'jannowak@gmail.com',
//             username: 'jannowak123',
//             role: 'teacher',
//         },
//         title: 'Chce usunąć bazę danych jak to zrobić ?',
//         content:
//             'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//         categories: [
//             { _id: '61c5e007605a26c6544cc47b', name: 'informatyka' },
//             { _id: '61c5cb9db3a45175d6402493', name: 'rosyjski' },
//             { _id: '61c5e000605a26c6544cc479', name: 'niemiecki' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:04:11.600Z',
//         updatedAt: '2021-12-29T09:35:46.571Z',
//     },
//     {
//         _id: '61c627d075140d2289173949',
//         user: {
//             _id: '61c626cb75140d2289173935',
//             email: 'maciejskarga@gmail.com',
//             username: 'skargamaciek',
//             role: 'teacher',
//         },
//         title: 'Jedzie ktoś na zawody/konkurs ?',
//         content:
//             'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//         categories: [
//             { _id: '61c5e007605a26c6544cc47b', name: 'informatyka' },
//             { _id: '61c5cb9db3a45175d6402493', name: 'rosyjski' },
//             { _id: '61c5e000605a26c6544cc479', name: 'niemiecki' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:04:32.793Z',
//         updatedAt: '2021-12-29T09:36:09.386Z',
//     },
//     {
//         _id: '61c627e075140d228917394b',
//         user: {
//             _id: '61c626cb75140d2289173935',
//             email: 'maciejskarga@gmail.com',
//             username: 'skargamaciek',
//             role: 'teacher',
//         },
//         title: 'Odkryłem błąd ',
//         content: 'Przez cały ten czas jako treść postu wpiswyałem odpowiedź',
//         categories: [
//             { _id: '61c5e007605a26c6544cc47b', name: 'informatyka' },
//             { _id: '61c481cf36c3ada27b75e07e', name: 'matematyka' },
//             { _id: '61c5e000605a26c6544cc479', name: 'niemiecki' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:04:48.141Z',
//         updatedAt: '2021-12-24T20:04:48.141Z',
//     },
//     {
//         _id: '61c627f075140d228917394d',
//         user: {
//             _id: '61c626cb75140d2289173935',
//             email: 'maciejskarga@gmail.com',
//             username: 'skargamaciek',
//             role: 'teacher',
//         },
//         title: 'Problem z funkcją kwadratową',
//         content: 'Jak mogę obliczyć szybko funkcję kwadratową bez większych problemów',
//         categories: [
//             { _id: '61c5e000605a26c6544cc479', name: 'niemiecki' },
//             { _id: '61c481cf36c3ada27b75e07e', name: 'matematyka' },
//             { _id: '61c5dff8605a26c6544cc477', name: 'angielski' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:05:04.567Z',
//         updatedAt: '2021-12-24T20:05:04.567Z',
//     },
//     {
//         _id: '61c627fa75140d228917394f',
//         user: {
//             _id: '61c626cb75140d2289173935',
//             email: 'maciejskarga@gmail.com',
//             username: 'skargamaciek',
//             role: 'teacher',
//         },
//         title: 'Kopiowanie bazy danych',
//         content: 'Jak mogę zrobić dogłębną kopię bazy danych ?',
//         categories: [
//             { _id: '61c5cb9db3a45175d6402493', name: 'rosyjski' },
//             { _id: '61c481cf36c3ada27b75e07e', name: 'matematyka' },
//             { _id: '61c5dff8605a26c6544cc477', name: 'angielski' },
//         ],
//         stars: [],
//         comments: [],
//         createdAt: '2021-12-24T20:05:14.597Z',
//         updatedAt: '2021-12-24T20:05:14.597Z',
//     },
// ];

const StyledPostContainer = styled.article`
    padding: ${({ theme }) => theme.spacing.xs};
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const TestPosts = () => {
    const dispatch = useDispatch();
    const postsStore = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
    console.log(postsStore);

    return (
        <StyledPostContainer>
            <Suspense fallback={<h1>Ładowanie postów...</h1>}>
                {postsStore.posts.map((post) => (
                    <PostContainer key={post._id} {...post} />
                ))}
            </Suspense>
        </StyledPostContainer>
    );
};

export default TestPosts;
