

//////////////////////////////////////
import React from 'react';
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
		color:"textPrimary",

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

/////////////////////////////////////////////
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
/////////////////////////////////////////

const Posts = (props) => {
	const { posts } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any Data at the moment</p>;
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
					{posts.map((post) => (
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
							<StyledTableCell align="right" ><PhoneNumber number={post.phone} isLinked={true} noWrap /></StyledTableCell>

							<StyledTableCell align="right">{post.excerpt.substr(0, 10)}...</StyledTableCell>

						</StyledTableRow>
					))}
				</TableBody>
			</Table>
			
		</TableContainer>
		


	);
};
export default Posts;