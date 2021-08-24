// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// const useStyles = makeStyles((theme) => ({
// 	cardMedia: {
// 		paddingTop: '56.25%', // 16:9
// 	},
// 	link: {
// 		margin: theme.spacing(1, 1.5),
// 	},
// 	cardHeader: {
// 		backgroundColor:
// 			theme.palette.type === 'light'
// 				? theme.palette.grey[200]
// 				: theme.palette.grey[700],
// 	},
// 	postTitle: {
// 		fontSize: '16px',
// 		textAlign: 'left',
// 	},
// 	postText: {
// 		display: 'flex',
// 		justifyContent: 'left',
// 		alignItems: 'baseline',
// 		fontSize: '12px',
// 		textAlign: 'left',
// 		marginBottom: theme.spacing(2),
// 	},
// }));

// const Search = () => {
// 	const classes = useStyles();
// 	const search = 'search';
// 	const [appState, setAppState] = useState({
// 		search: '',
// 		posts: [],
// 	});

// 	useEffect(() => {
// 		axiosInstance.get(search + '/' + window.location.search).then((res) => {
// 			const allPosts = res.data;
// 			setAppState({ posts: allPosts });
// 			console.log(res.data);
// 		});
// 	}, [setAppState]);

// 	return (
// 		<React.Fragment>
// 			<Container maxWidth="md" component="main">
// 				<Grid container spacing={5} alignItems="flex-end">
// 					{appState.posts.map((post) => {
// 						return (
// 							// Enterprise card is full width at sm breakpoint
// 							<Grid item key={post.id} xs={12} md={4}>
// 								<Card className={classes.card}>
// 									<Link
// 										color="textPrimary"
// 										href={'/post/' + post.slug}
// 										className={classes.link}
// 									>
// 										<CardMedia
// 											className={classes.cardMedia}
// 											image={post.image}
// 											title="Image title"
// 										/>
// 									</Link>
// 									<CardContent className={classes.cardContent}>
// 										<Typography
// 											gutterBottom
// 											variant="h6"
// 											component="h2"
// 											className={classes.postTitle}
// 										>
// 											{post.title.substr(0, 50)}...
// 										</Typography>
// 										<div className={classes.postText}>
// 											<Typography color="textSecondary">
// 												{post.excerpt.substr(0, 40)}...
// 											</Typography>
// 										</div>
// 									</CardContent>
// 								</Card>
// 							</Grid>
// 						);
// 					})}
// 				</Grid>
// 			</Container>
// 		</React.Fragment>
// 	);
// };
// export default Search;
/////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import Typography from '@material-ui/core/Typography';
////
import Link from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhoneNumber from 'react-phone-number';
const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%',
		height: '80px',
	},
	link: {
		margin: theme.spacing(1, 1.5),

	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 700,
	},

}));
const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);
/////////////////////////////////////////////
const Search = () => {
	const classes = useStyles();
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Covid Care Facility</StyledTableCell>
						<StyledTableCell align="right">Oxygen(MT)</StyledTableCell>
						<StyledTableCell align="right">Remdisvir&nbsp;(N)</StyledTableCell>
						<StyledTableCell align="right">Total ICU BEDS&nbsp;(N)</StyledTableCell>
						<StyledTableCell align="right">Available  ICU BEDS&nbsp;(N)</StyledTableCell>
						<StyledTableCell align="right">Total OXYGEN BEDS&nbsp;(N)</StyledTableCell>
						<StyledTableCell align="right">Available OXYGEN BEDS&nbsp;(N)</StyledTableCell>
						<StyledTableCell align="right">Mobile&nbsp;IN</StyledTableCell>

						<StyledTableCell align="right">Address&nbsp;IN</StyledTableCell>


					</TableRow>
				</TableHead>
				<TableBody>
				{appState.posts.map((post) => {
        			return (
					
						<StyledTableRow key={post.id}>
							<Link
								href={'post/' + post.slug}
								className={classes.link}
							>
								<StyledTableCell component="th" scope="row">
									{post.title}
								</StyledTableCell>
							</Link>
							<StyledTableCell align="right">{post.oxy}</StyledTableCell>
							<StyledTableCell align="right">{post.rem}</StyledTableCell>
							<StyledTableCell align="right">{post.t_icu_bed}</StyledTableCell>
							<StyledTableCell align="right">{post.a_icu_bed}</StyledTableCell>
							<StyledTableCell align="right">{post.t_oxy_bed}</StyledTableCell>
							<StyledTableCell align="right">{post.t_oxy_bed}</StyledTableCell>
							{/* <StyledTableCell align="right">{post.phone}</StyledTableCell> */}
							<StyledTableCell align="right"><PhoneNumber number={post.phone} isLinked={true} /></StyledTableCell>

							<StyledTableCell align="right">{post.excerpt.substr(0, 20)}...</StyledTableCell>

						</StyledTableRow>
					)})}
				</TableBody>
			</Table>
			
		</TableContainer>
		


	);
};
export default Search;