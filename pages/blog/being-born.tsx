import Link from 'next/link';
import React from 'react';
import BlogPostLayout from 'components/BlogPostLayout';

// Get the data for each blog post
// export async function getStaticProps({ params: { slug }, preview }) {
//     // load the postsTable so that we can get the page's ID
//     const postsTable = await getBlogIndex();
//     const post = postsTable[slug];

//     // if we can't find the post or if it is unpublished and
//     // viewed without preview mode then we just redirect to /blog
//     if (!post || (post.Published !== 'Yes' && !preview)) {
//         console.log(`Failed to find post for slug: ${slug}`);
//         return {
//             props: {
//                 redirect: '/blog',
//                 preview: false,
//             },
//             revalidate: 5,
//         };
//     }

//     const postData = await getPageData(post.id);
//     // Remove preview paragraph and divider
//     post.content = postData.blocks.slice(2);

//     for (let i = 0; i < postData.blocks.length; i++) {
//         const { value } = postData.blocks[i];
//         const { type, properties } = value;
//     }

//     const { users } = await getNotionUsers(post.Authors || []);
//     post.Authors = Object.keys(users).map((id) => users[id].full_name);

//     return {
//         props: {
//             post,
//             preview: preview || false,
//         },
//         revalidate: 10,
//     };
// }

// // Return our list of blog posts to prerender
// export async function getStaticPaths() {
//     const postsTable = await getBlogIndex();
//     // we fallback for any unpublished posts to save build time
//     // for actually published ones
//     return {
//         paths: Object.keys(postsTable)
//             .filter((post) => postsTable[post].Published === 'Yes')
//             .map((slug) => getBlogLink(slug)),
//         fallback: true,
//     };
// }

// const listTypes = new Set(['bulleted_list', 'numbered_list']);

// function RenderPost({ post, redirect, preview }) {
//     const router = useRouter();

//     let listTagName: string | null = null;
//     let listLastId: string | null = null;
//     let listMap: {
//         [id: string]: {
//             key: string;
//             isNested?: boolean;
//             nested: string[];
//             children: React.ReactFragment;
//         };
//     } = {};

//     useEffect(() => {
//         if (redirect && !post) {
//             router.replace(redirect);
//         }
//     }, [redirect, post]);

//     // If the page is not yet generated, this will be displayed
//     // initially until getStaticProps() finishes running
//     if (router.isFallback) {
//         return <div>Loading...</div>;
//     }

//     // if you don't have a post at this point, and are not
//     // loading one from fallback then  redirect back to the index
//     if (!post) {
//         return (
//             <div>
//                 <p>Woops! didn't find that post, redirecting you back to the blog index</p>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Head>
//                 <title>Kadi Hill | {post.Page}</title>
//             </Head>

//             <ReadingProgress />

//             {preview && (
//                 <div>
//                     <div>
//                         <b>Note:</b>
//                         {` `}Viewing in preview mode{' '}
//                         <Link href={`/api/clear-preview?slug=${post.Slug}`}>
//                             <button>Exit Preview</button>
//                         </Link>
//                     </div>
//                 </div>
//             )}

//             <h1>{post.Page || ''}</h1>

//             <div className='blog-content'>
//                 {(!post.content || post.content.length === 0) && <p>This post has no content</p>}

//                 {(post.content || []).map((block, blockIdx) => {
//                     const { value } = block;
//                     const { type, properties, id, parent_id } = value;
//                     const isLast = blockIdx === post.content.length - 1;
//                     const isList = listTypes.has(type);
//                     let toRender = [];

//                     if (isList) {
//                         listTagName = components[type === 'bulleted_list' ? 'ul' : 'ol'];
//                         listLastId = `list${id}`;

//                         listMap[id] = {
//                             key: id,
//                             nested: [],
//                             children: textBlock(properties.title, true, id),
//                         };

//                         if (listMap[parent_id]) {
//                             listMap[id].isNested = true;
//                             listMap[parent_id].nested.push(id);
//                         }
//                     }

//                     if (listTagName && (isLast || !isList)) {
//                         toRender.push(
//                             React.createElement(
//                                 listTagName,
//                                 { key: listLastId! },
//                                 Object.keys(listMap).map((itemId) => {
//                                     if (listMap[itemId].isNested) return null;

//                                     const createEl = (item) =>
//                                         React.createElement(
//                                             components.li || 'ul',
//                                             { key: item.key },
//                                             item.children,
//                                             item.nested.length > 0
//                                                 ? React.createElement(
//                                                     components.ul || 'ul',
//                                                     { key: item + 'sub-list' },
//                                                     item.nested.map((nestedId) => createEl(listMap[nestedId]))
//                                                 )
//                                                 : null
//                                         );
//                                     return createEl(listMap[itemId]);
//                                 })
//                             )
//                         );
//                         listMap = {};
//                         listLastId = null;
//                         listTagName = null;
//                     }

//                     const renderHeading = (Type: string | React.ComponentType) => {
//                         toRender.push(
//                             <Heading key={id}>
//                                 <Type key={id}>{textBlock(properties.title, true, id)}</Type>
//                             </Heading>
//                         );
//                     };

//                     switch (type) {
//                         case 'page':
//                         case 'divider':
//                             break;
//                         case 'text':
//                             if (properties) {
//                                 toRender.push(textBlock(properties.title, false, id));
//                             }
//                             break;
//                         case 'image':
//                         case 'video':
//                         case 'embed': {
//                             const { format = {} } = value;
//                             const { block_width, block_height, display_source, block_aspect_ratio } = format;
//                             const baseBlockWidth = 768;
//                             const roundFactor = Math.pow(10, 2);
//                             // calculate percentages
//                             const width = block_width
//                                 ? `${Math.round((block_width / baseBlockWidth) * 100 * roundFactor) / roundFactor}%`
//                                 : block_height || '100%';

//                             const isImage = type === 'image';
//                             const Comp = isImage ? 'img' : 'video';
//                             const useWrapper = block_aspect_ratio && !block_height;
//                             const childStyle: CSSProperties = useWrapper
//                                 ? {
//                                     width: '100%',
//                                     height: '100%',
//                                     border: 'none',
//                                     position: 'absolute',
//                                     top: 0,
//                                 }
//                                 : {
//                                     width,
//                                     border: 'none',
//                                     height: block_height,
//                                     display: 'block',
//                                     maxWidth: '100%',
//                                 };

//                             let child = null;

//                             if (!isImage && !value.file_ids) {
//                                 // external resource use iframe
//                                 child = (
//                                     <iframe
//                                         style={childStyle}
//                                         src={display_source}
//                                         key={!useWrapper ? id : undefined}
//                                         className={!useWrapper ? 'asset-wrapper' : undefined}
//                                     />
//                                 );
//                             } else {
//                                 // notion resource
//                                 child = (
//                                     <Comp
//                                         key={!useWrapper ? id : undefined}
//                                         src={`/api/asset?assetUrl=${encodeURIComponent(display_source as any)}&blockId=${id}`}
//                                         controls={!isImage}
//                                         alt={`An ${isImage ? 'image' : 'video'} from Notion`}
//                                         loop={!isImage}
//                                         muted={!isImage}
//                                         autoPlay={!isImage}
//                                         style={childStyle}
//                                     />
//                                 );
//                             }

//                             toRender.push(
//                                 useWrapper ? (
//                                     <div
//                                         style={{
//                                             paddingTop: `${Math.round(block_aspect_ratio * 100)}%`,
//                                             position: 'relative',
//                                         }}
//                                         className='asset-wrapper'
//                                         key={id}
//                                     >
//                                         {child}
//                                     </div>
//                                 ) : (
//                                     child
//                                 )
//                             );
//                             break;
//                         }
//                         case 'header':
//                             renderHeading('h1');
//                             break;
//                         case 'sub_header':
//                             renderHeading('h2');
//                             break;
//                         case 'sub_sub_header':
//                             renderHeading('h3');
//                             break;
//                         case 'quote': {
//                             if (properties.title) {
//                                 toRender.push(React.createElement(components.blockquote, { key: id }, properties.title));
//                             }
//                             break;
//                         }
//                         case 'callout': {
//                             toRender.push(
//                                 <div className='callout' key={id}>
//                                     {value.format?.page_icon && <div>{value.format?.page_icon}</div>}
//                                     <div className='text'>{textBlock(properties.title, true, id)}</div>
//                                 </div>
//                             );
//                             break;
//                         }
//                         default:
//                             if (process.env.NODE_ENV !== 'production' && !listTypes.has(type)) {
//                                 console.log('unknown type', type);
//                             }
//                             break;
//                     }

//                     return toRender;
//                 })}
//             </div>

//             <style jsx>{`
//         h1 {
//           font-weight: 800;
//           margin: 0.3em 0 1em 0;
//         }
//       `}</style>
//         </>
//     );
// };

export default function BeingBorn() {
    return (
        <BlogPostLayout title={`Being Born`}>

            <p>With my first pregnancy, I had these dual thoughts in my mind. I believed I would have this magical, transcendent birth but also that I would die.</p>

            <p>Maybe because someone in my past once "prophesied" I would die during childbirth, maybe because I have had a really close brush with death before. I don’t know. One day I was sharing about this duality at an empathy//Non Violent Communication meetup I have attended for years. We were in pairs taking turns empathizing with one another. I was sharing with a very mild, warm soul. A tall, thin man named Rich who had the same East Texas twang I grew up with. We sat outside in a backyard in Hyde Park, Austin, Texas on a sunny afternoon.</p>

            <p>I started sharing about the polarity in my visions of what giving birth would be like and he asked me a question I found surprising, "What was your birth like?" I repeated the story I've heard my whole life. Applying humor in the places it was always applied before:</p>

            <p>My mom drove herself to the hospital. My dad was at home with my older sister who was 2 years old. My mom had an emergency c - section with my sister. She had a c - section scheduled with me, however she actually went into labor the day of the scheduled surgery which I consider quite lucky for both of us. We still got some of the benefits of natural labor even though I was born via cesarean.</p>

            <p>Once the surgery began my mom looked up at my Aunt Becky, her sister, who was in the room with her and told her she could not breathe and she was scared. This part of the story is strangely always told with humor. The anesthesiologist was dancing around and had music playing. Aunt Becky got his attention and he came over to check my mom. Her epidural was reversed, traveling up instead of down.</p>

            <p>My empathy partner paused me and said, "as an anesthesiologist myself, I am distracted from empathizing and want to educate, is that okay?" I said sure. Then he said, "you and your mom almost died in childbirth.'</p>

            <p>The tears gushed. They flowed. Then they stopped.</p>

            <p>Then he said, "your only experience with birth so far has been a near death experience." It sounded far out there and it also sounded true and it felt true.</p>

            <p>Empathizing with that subconscious fear was liberating and healing. I followed up with my mom about the experience and she said, with no humor, "yes it was very scary. There was a malpractice suit filed against him." I asked why she always tells the story with humor and she said, "I just didn’t want to dwell on it." And she didn’t for thirty years.</p>

            <p>What happened to my mom was bad. You can likely feel that in the tone of the writing. I am so thankful C - sections are available to save lives when they are medically necessary. I am not saying C - sections are bad. My mom was not being cared for properly in this experience. Here are a few things that could have improved the situation:</p>

            <ul>
                <li>
                    A VBAC (vaginal birth after cesarean)
                </li>
                <li>
                    Letting her labor naturally as long as possibly for the long term health of her uterus and hormone release between baby and mommy for bonding, breastfeeding success, and long term health of baby.
                </li>
                <li>
                    Having an anesthesiologist who was present and paying attention to the work he was doing as it was a matter of life or death for my mother and I.
                </li>
                <li>
                    Doing skin to skin after the surgery and having delayed cord clamping and a chance to start breastfeeding immediately.
                </li>
            </ul>

            <p>I almost died due to the epidural being administered wrong, I was cut out of the womb, my umbilical cord was immediately cut causing a fast drop in blood sugar and other problems, I was then taken from my mother and given a bottle of water and then placed in a bright box with a light shining in my eyes and tons of free space and no knowledge of where my mother was. Her voice, her heartbeat, her safe and warm dark womb all vanishing quickly.I imagine I was terrified.</p>

            <p>Instead of being given to my mother I was given a bottle of water. Babies should not drink water at all until after 6 months. Drinking  water can actually kill an infant. This was the first thing I was given, instead of colostrum and breastmilk. Then I was placed under a light because I was jaundiced. I was naked under a bright light and completely alone.</p>

            <p>My Nana still tells this story, strangely also with so much humor, I never find it funny but let her tell it because she means no harm. Her and her best friend stood watching me under the light and got “so tickled, ” an East Texas phrase meaning amused or even hysterical, that I was so “mad” and that I was screaming at the top of my lungs.</p>

            <p>So birth for me was a really unsafe experience. I am thankful that I was breastfed by my mother and that our bond is strong and this helped ease some of the trauma around birth.Obviously, thirty years later as I became pregnant for the first time, it was still very present, though dormant, in my psyche. Maybe it is what inspired me to educate and seek out my own incredible birthing experience. That definitely helped heal the trauma.</p>

            <p>I asked my mom and dad both to be present at the birth of my first child to help heal their trauma around my birth as well. They flew to another country to attend the birth and were present in the room when my daughter was born at home and it was beautiful and perfect.</p>

            <p>Sharing our stories is important. To process, to share wisdom and lessons learned. One of my favorite things I did to prepare for birth was have anyone who wanted to share their birth stories at my baby showers and blessing ways share them. I heard from four different generations what giving birth was like and the differences were vast. I heard from mom’s who did unmedicated or medicated hospital births, moms who had 'twilight bithrs (meaning they were put to sleep and woke up and handed a baby), moms who birthed at home, and moms who had planned or emergency cesareans.</p>

            <p>My take away from all these stories spanning multiple different generations and cultures is that we are each responsible for advocating for and seeking out the birth we want because it can but such a vastly different experience for each woman and baby. Depending on which model of care she is being treated under determines so much of her experience.</p>

            <p>Questions for pregnant mamas to consider:</p>

            <ul>
                <li>Do you know the statistics for interventions and ceserans of your care provider?</li>
                <li>Do you know when interventions are medically necessary and why?</li>
                <li>Do you have a doula or advocate to stand up for you during labor if you are birthing in a place you need one?</li>
                <li>Do you know why birth is important?</li>
            </ul>

            <p>For the mothers who have given birth:</p>

            <ul>
                <li>Did you feel prepared for what childbirth was actually like?</li>
                <li>Was the recovery what you expected?</li>
                <li>Did you know what the possibilities were?</li>
                <li>Did you know what your chances of having a c - section or a hemorrhage and how those numbers change depending on how and where you gave birth?</li>
            </ul>

            <p>Depending on where you live in the world if you just let yourself be led by social norms and default to whatever your mom and dad, most women you know, or whatever your doctor recommends, your birth may not turn out how you want, how you expect(ed), or in a way that is optimal for you and your baby. It is up to you, and you alone, to prepare and educate yourself for pregnancy and birth.</p>

            <p>Use as many resources as you can to gather as much information as you can. I saw a midwife and an obgyn, I read an obstetrics textbook, a midwife textbook, a birth story book, I asked every women interested in sharing what she thought I should know, I reflected on my own fears and traumas and I empathized with them before birth so they did not come up during birth complicating things. I stayed active and prepared myself physically because birth is a marathon and I prepared spiritually and mentally as well and it paid off.</p>

            <p>I knew the statistics, I knew the risks, and I went in prepared and educated. That did not guarantee me the birth I wanted, but it made my odds much higher, and I got what I wanted and what I prepared for, thank God. I feel grateful and want to share my story to help prepare other mothers just like other mothers did for me.</p>
        </BlogPostLayout>
    )
}

export const meta = {
    postNumber: 1,
    title: 'Being Born',
    author: 'Kadi Hill',
    pubDate: 'October 14th, 2018',
    tags: [],
    description:
        'With my first pregnancy, I had this strange experience where I believed I would have this magical, transcendent birth but also that I would die.',
};
